import Layout from 'components/layout'
import PhotoPreview from 'components/photoPreview'
import styles from 'styles/photos.module.scss'

interface PhotosPageProps {}

const PhotosPage = ({}: PhotosPageProps) => {
    return (
        <Layout>
            <div className={styles.container}>
                <PhotoPreview />
                <PhotoPreview />
                <PhotoPreview />
                <PhotoPreview />
                <PhotoPreview />
                <PhotoPreview />
                <PhotoPreview />
            </div>
        </Layout>
    )
}

export default PhotosPage
