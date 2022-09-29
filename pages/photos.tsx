import Layout from 'components/layout'
import PhotoPreview from 'components/photoPreview'
import styles from 'styles/photos.module.scss'
import { useState } from 'react'
import ModalWindow from 'components/modal'
import { Photo } from '../service/type'

interface PhotosPageProps {}

const PhotosPage = ({}: PhotosPageProps) => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [photos, setPhotos] = useState<Photo[]>([])

    // useEffect(()=>{getFilesFromStorage()}, [])

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
