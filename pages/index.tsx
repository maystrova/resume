import type { NextPage } from 'next'
import HomePage from 'components/homePage'
import Layout from 'components/layout'

const Home: NextPage = () => {
    return (
        <Layout>
            <HomePage />
        </Layout>
    )
}

export default Home
