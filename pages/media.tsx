import Layout from 'components/layout'
import { youtubeLinks } from '../service/youtube'
import VideoPreview from '../components/videoPreview'

interface MediaPageProps {}

const MediaPage = ({}: MediaPageProps) => {
    return (
        <Layout>
            {youtubeLinks.map(video => {
                return <VideoPreview src={video} />
            })}
        </Layout>
    )
}

export default MediaPage
