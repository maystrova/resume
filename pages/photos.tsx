import Layout from 'components/layout'
import PhotoPreview from 'components/photoPreview'
import styles from 'styles/photos.module.scss'
import { useEffect, useState } from 'react'
import ModalWindow from 'components/modal'
import { Photo } from '../service/type'
import { storage } from '../service/firebase'
import { ref } from 'firebase/storage'
import { getDownloadUrl } from '@firebase/storage/dist/src/implementation/requests'
import { getFileFromStorage } from '../service/storage'

interface PhotosPageProps {}

const PhotosPage = ({}: PhotosPageProps) => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [photos, setPhotos] = useState<Photo[]>([])

    // useEffect(() => {
    //     let filesData: string[] = []
    //
    //     for (const file of files) {
    //         const snapshot = await getDownloadURL(ref(storage, path))
    //         filesData.push(snapshot)
    //         console.log(filesData)
    //     // }
    //     // return filesData
    // }, [])

    // useEffect(() => {
    //     getFileFromStorage('gs://kseniapopova-resume.appspot.com')
    // }, [])

    return (
        <Layout>
            <div className={styles.container}>
                {photos.map(photo => {
                    return (
                        <PhotoPreview
                            key={photo.id}
                            onClick={() => setModalIsOpen(true)}
                            src={photo.src}
                        />
                    )
                })}
                {modalIsOpen && (
                    <ModalWindow isOpen={modalIsOpen} onCancel={() => setModalIsOpen(false)}>
                        {
                            <div>
                                <img
                                    className={styles.main}
                                    src="/static/homePagePhoto1.PNG"
                                    alt="img"
                                />
                            </div>
                        }
                    </ModalWindow>
                )}
            </div>
        </Layout>
    )
}

export default PhotosPage
