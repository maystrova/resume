import React, { useState } from 'react'
import styles from 'styles/homePage.module.scss'
import Header from 'components/header'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
    const [profilePhoto, setProfilePhoto] = useState<string>('/static/homePagePhoto2.PNG')

    return (
        <div className={styles.container}>
            <Header />
            <img className={styles.homePagePhoto} src={profilePhoto} alt="" />
        </div>
    )
}

export default HomePage
