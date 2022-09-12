import Layout from 'components/layout'
import PhotoPreview from 'components/photoPreview'
import styles from 'styles/photos.module.scss'

interface PhotosPageProps {}

const PhotosPage = ({}: PhotosPageProps) => {
    return (
        <Layout>
            <div className={styles.container}>
                <PhotoPreview src={'/static/homePagePhoto1.PNG'} />
                <PhotoPreview src={'/static/homePagePhoto2.PNG'} />
                <PhotoPreview src={'/static/homePagePhoto1.PNG'} />
                <PhotoPreview src={'/static/homePagePhoto2.PNG'} />
            </div>
        </Layout>
    )
}

export default PhotosPage
