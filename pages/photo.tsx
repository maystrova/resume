import Layout from 'components/layout'

interface PhotoPageProps {}

const PhotoPage = ({}: PhotoPageProps) => {
    return (
        <Layout>
            <div>
                <img src="/static/homePagePhoto1.PNG" alt="" />
            </div>
        </Layout>
    )
}

export default PhotoPage
