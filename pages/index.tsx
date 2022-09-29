import type { NextPage } from 'next'
import Layout from 'components/layout'
import React, { useEffect, useState } from 'react'
import { getFileFromStorage, getFilesFromStorage } from 'service/storage'
import styles from 'styles/homePage.module.scss'
import Image from 'next/image'
import { storage } from '../service/firebase'

const Home: NextPage = () => {
    const [profilePhoto, setProfilePhoto] = useState<string>('')

    useEffect(() => {
        initImages()
    }, [])

    const initImages = async () => {
        try {
            const serverImage = await getFileFromStorage('/IMG_0838.PNG')
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
        <Layout>
            <div className={styles.container}>
                <div className={styles.homePagePhotoWrapper}>
                    <img className={styles.homePagePhoto} src={profilePhoto} alt="photo" />
                    {/*<Image src={profilePhoto} width={200} height={200} />*/}
                </div>
            </div>
        </Layout>
    )
}

export default Home
