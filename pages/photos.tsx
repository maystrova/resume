import Layout from 'components/layout'
import PhotoPreview from 'components/photoPreview'
import styles from 'styles/photos.module.scss'
import { useEffect, useState } from 'react'
import ModalWindow from 'components/modal'
import { Photo } from 'service/type'
import { getFileFromStorage } from '../service/storage'

interface PhotosPageProps {}

const PhotosPage = ({}: PhotosPageProps) => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [paths, setPaths] = useState<string[]>([])

    const ppaths: string[] = [
        '/IMG_0838.PNG',
        '/IMG_0841.PNG',
        '/IMG_1518.JPG',
        '/IMG_1519.JPG',
        '/IMG_1520.JPG',
    ]

    const downloadPaths = async () => {
        let pss: string[] = []

        try {
            for (let path of ppaths) {
                const ps = await getFileFromStorage(path)
                if (ps) {
                    pss.push(ps)
                }
            }
            setPaths(pss)
        } catch (error) {
            console.error('downloadPaths', error)
        }
    }

    useEffect(() => {
        downloadPaths()
    }, [])

    const PHOTOS: Photo[] = [
        {
            src: paths[0],
            id: 1,
        },
        { src: paths[1], id: 2 },
    ]

    return (
        <Layout>
            <div className={styles.container}>
                {PHOTOS.map(photo => {
                    return (
                        <div key={photo.id}>
                            <PhotoPreview
                                key={photo.id}
                                onClick={() => setModalIsOpen(true)}
                                src={photo.src}
                            />
                            {modalIsOpen && (
                                <ModalWindow
                                    isOpen={modalIsOpen}
                                    onCancel={() => setModalIsOpen(false)}
                                >
                                    {
                                        <div>
                                            <img
                                                className={styles.main}
                                                src={photo.src}
                                                alt="img"
                                            />
                                        </div>
                                    }
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
