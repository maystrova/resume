import Layout from 'components/layout'
import styles from 'styles/projects.module.scss'
import ProjectPreview from '../components/projectPreview'

interface ProjectsPageProps {}

const ProjectsPage = ({}: ProjectsPageProps) => {
    return (
        <Layout>
            <ProjectPreview>
                <div>
                    <img src="" alt="" />
                    <div>InstaPianoCompetition</div>
                </div>
            </ProjectPreview>
        </Layout>
    )
}

export default ProjectsPage
