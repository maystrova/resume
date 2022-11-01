import { useEffect, useState } from 'react'

import Layout from 'components/layout'
import PhotoPreview from 'components/photoPreview'
import ModalWindow from 'components/modal'

import { getFileFromStorage } from 'service/storage'
import { Photo } from 'service/type'

import styles from 'styles/photos.module.scss'

const PhotosPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [paths, setPaths] = useState<string[]>([])
    const [currentPhoto, setCurrentPhoto] = useState<string>('')

    const preparedPaths: string[] = [
        '/IMG_0838.PNG',
        '/IMG_0841.PNG',
        '/IMG_1518.JPG',
        '/IMG_1519.JPG',
        '/IMG_1520.JPG',
    ]

    const downloadPaths = async () => {
        let downloadedPaths: string[] = []

        try {
            for (let path of preparedPaths) {
                const ps = await getFileFromStorage(path)
                if (ps) {
                    downloadedPaths.push(ps)
                }
            }
            setPaths(downloadedPaths)
        } catch (error) {
            console.error('downloadPaths', error)
        }
    }

    useEffect(() => {
        downloadPaths()
    }, [])

    const PHOTOS: Photo[] = [
        { src: paths[0], id: 0 },
        { src: paths[1], id: 1 },
        { src: paths[2], id: 2 },
        { src: paths[3], id: 3 },
        { src: paths[4], id: 4 },
    ]

    return (
        <Layout>
            <div className={styles.container}>
                {PHOTOS.map(photo => {
                    return (
                        <div key={photo.id}>
                            <PhotoPreview
                                key={photo.id}
                                onClick={() => {
                                    setModalIsOpen(true)
                                    setCurrentPhoto(photo.src)
                                }}
                                style={{ backgroundImage: `url("${photo.src}")` }}
                            />
                            {modalIsOpen && (
                                <ModalWindow
                                    isOpen={modalIsOpen}
                                    onCancel={() => setModalIsOpen(false)}
                                >
                                    <div key={photo.id}>
                                        <img className={styles.main} src={currentPhoto} alt="img" />
                                    </div>
                                </ModalWindow>
                            )}
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default PhotosPage
