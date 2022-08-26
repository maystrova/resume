import styles from 'styles/homePage.module.scss'
import Header from 'components/header'

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
    return (
        <div className={styles.container}>
            <Header />
        </div>
    )
}

export default HomePage
