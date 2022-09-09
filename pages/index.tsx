import type { NextPage } from 'next'
import Layout from 'components/layout'
import React, { useEffect, useState } from 'react'
import { getFileFromStorage } from 'service/storage'
import styles from 'styles/homePage.module.scss'

const Home: NextPage = () => {
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

    const quote: string = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at corporis
        debitis mollitia nam, nemo nesciunt nihil non quas repellat? At consequuntur magnam odit pariatur quasi saepe
        soluta voluptatibus? Repellendus...`
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.homePagePhotoWrapper}>
                    <img className={styles.homePagePhoto} src={profilePhoto} alt="photo" />
                    {/*<Image src={profilePhoto} width={200} height={200} />*/}
                    <p className={styles.quote}>{quote}</p>
                </div>
            </div>
        </Layout>
    )
}

export default Home
