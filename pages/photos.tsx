import Layout from 'components/layout'
import PhotoPreview from '../components/photoPreview'

interface PhotosPageProps {}

const PhotosPage = ({}: PhotosPageProps) => {
    return (
        <Layout>
            <div>
                <PhotoPreview src={'/static/homePagePhoto1.PNG'} />
            </div>
        </Layout>
    )
}

export default PhotosPage
