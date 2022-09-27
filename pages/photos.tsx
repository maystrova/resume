import Layout from 'components/layout'
import PhotoPreview from 'components/photoPreview'
import styles from 'styles/photos.module.scss'
import { useState } from 'react'
import ModalWindow from 'components/modal'

interface PhotosPageProps {}

const PhotosPage = ({}: PhotosPageProps) => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    return (
        <Layout>
            <div className={styles.container}>
                <PhotoPreview
                    src={'/static/homePagePhoto1.PNG'}
                    onClick={() => setModalIsOpen(true)}
                />
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
