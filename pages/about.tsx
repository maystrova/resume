import { useContext } from 'react'
import Layout from 'components/layout'
import { ResumeContext } from 'context/storeContext'
import { tr } from 'service/language'

interface AboutPageProps {}

const AboutPage = ({}: AboutPageProps) => {
    const { store } = useContext(ResumeContext)

    return (
        <Layout>
            <p>{tr('biography', store.currentLang)}</p>
        </Layout>
    )
}

export default AboutPage
