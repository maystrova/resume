import { useContext } from 'react'
import Layout from 'components/layout'
import { ResumeContext } from 'context/storeContext'
import { tr } from 'service/language'
import styles from 'styles/about.module.scss'

interface AboutPageProps {}

const AboutPage = ({}: AboutPageProps) => {
    const { store } = useContext(ResumeContext)

    return (
        <Layout>
            <div className={styles.container}>
                <p className={styles.biography}>{tr('biography', store.currentLang)}</p>
            </div>
        </Layout>
    )
}

export default AboutPage
