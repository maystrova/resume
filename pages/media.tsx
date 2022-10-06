import Layout from 'components/layout'
import VideoPreview from '../components/videoPreview'
import { Media } from '../service/type'
import { tr } from '../service/language'
import { useContext } from 'react'
import { ResumeContext } from '../context/storeContext'

interface MediaPageProps {}

const MediaPage = ({}: MediaPageProps) => {
    const { store } = useContext(ResumeContext)

    const YOUTUBE_LINKS: Media[] = [
        {
            src: 'https://www.youtube.com/embed/x0pp-PpaSOU',
            id: 1,
            title: tr('talks', store.currentLang),
        },
        // { src: 'https://www.youtube.com/embed/9xI4kt90L0Q', id: 2, title:  },
    ]
    return (
        <Layout>
            {YOUTUBE_LINKS.map(video => {
                return (
                    <div>
                        <div>{video.title}</div>
                        <VideoPreview src={video.src} key={video.id} />
                    </div>
                )
            })}
        </Layout>
    )
}

export default MediaPage
