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
            src: 'https://www.youtube.com/embed/ToEOCVISoeA',
            id: 3,
            title: tr('shnitke', store.currentLang),
        },
        {
            src: 'https://www.youtube.com/embed/jptEIwT4C14',
            id: 4,
            title: tr('program', store.currentLang),
        },
        {
            src: 'https://www.youtube.com/embed/qpa8mN1jS3Y',
            id: 5,
            title: tr('sviridoff', store.currentLang),
        },
        {
            src: 'https://www.youtube.com/embed/KdpbL_I5-Wo',
            id: 6,
            title: tr('darg', store.currentLang),
        },
        {
            src: 'https://www.youtube.com/embed/ML5KbmbiRAk',
            id: 7,
            title: tr('duo', store.currentLang),
        },
        {
            src: 'https://www.youtube.com/embed/9xI4kt90L0Q',
            id: 8,
            title: tr('duo2', store.currentLang),
        },
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
