import React, { useEffect, useState } from 'react'
import styles from 'styles/homePage.module.scss'
import Header from 'components/header'
import { getFileFromStorage } from 'service/storage'
import Image from 'next/image'

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
    const [profilePhoto, setProfilePhoto] = useState<string>('')

    useEffect(() => {
        initImages()
    }, [])

    const initImages = async () => {
        try {
            const serverImage = await getFileFromStorage('/IMG_0841.PNG')
            if (serverImage) {
                setProfilePhoto(serverImage)
            } else {
                setProfilePhoto('/static/homePagePhoto2.PNG')
            }
        } catch (error) {
            console.error('initImages', error)
            setProfilePhoto('/static/homePagePhoto2.PNG')
        }
    }

    return (
        <div className={styles.container}>
            <Header />
            <img src={profilePhoto} alt="photo" className={styles.homePagePhoto} />
        </div>
    )
}

export default HomePage
