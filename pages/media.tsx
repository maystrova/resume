import Layout from 'components/layout'
import VideoPreview from 'components/videoPreview'
import { Media } from 'service/type'
import { tr } from 'service/language'
import { useContext } from 'react'
import { ResumeContext } from 'context/storeContext'
import styles from 'styles/media.module.scss'

interface MediaPageProps {}

const MediaPage = ({}: MediaPageProps) => {
    const { store } = useContext(ResumeContext)

    const YOUTUBE_LINKS: Media[] = [
        {
            src: 'https://www.youtube.com/embed/x0pp-PpaSOU',
            id: 1,
            title: tr('talks', store.currentLang),
        },
        {
            src: 'https://www.youtube.com/embed/c3hDNY5g4Ho',
            id: 2,
            title: tr('rachmaninoff', store.currentLang),
        },
        {
            src: 'https://www.youtube.com/embed/c3hDNY5g4Ho',
            id: 2,
            title: tr('rachmaninoff', store.currentLang),
        },
        {
            src: 'https://www.youtube.com/embed/c3hDNY5g4Ho',
            id: 2,
            title: tr('rachmaninoff', store.currentLang),
        },
        {
            src: 'https://www.youtube.com/embed/c3hDNY5g4Ho',
            id: 2,
            title: tr('rachmaninoff', store.currentLang),
        },
        {
            src: 'https://www.youtube.com/embed/c3hDNY5g4Ho',
            id: 2,
            title: tr('rachmaninoff', store.currentLang),
        },
        // { src: 'https://www.youtube.com/embed/9xI4kt90L0Q', id: 2, title:  },
    ]
    return (
        <Layout>
            <div className={styles.container}>
                {YOUTUBE_LINKS.map(video => {
                    return (
                        <div className={styles.preview}>
                            <VideoPreview src={video.src} key={video.id} />
                            <div className={styles.preview__title}>{video.title}</div>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default MediaPage
