import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'
import HomePage from 'components/homePage'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title></title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <HomePage />

            <footer className={styles.footer}></footer>
        </div>
    )
}

export default Home
