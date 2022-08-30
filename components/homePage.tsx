import React, { useState } from 'react'
import styles from 'styles/homePage.module.scss'
import Header from 'components/header'

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
    const [profilePhoto, setProfilePhoto] = useState<string>('')

    return (
        <div className={styles.container}>
            <Header />
            <img src={profilePhoto} alt="" />
        </div>
    )
}

export default HomePage
