import type { NextPage } from 'next'
import Layout from 'components/layout'
import React, { useContext, useEffect, useState } from 'react'
import { getFileFromStorage, getFilesFromStorage } from 'service/storage'
import styles from 'styles/homePage.module.scss'
import Image from 'next/image'
import { storage } from '../service/firebase'
import { tr } from '../service/language'
import { ResumeContext } from '../context/storeContext'
import PhotoPreview from '../components/photoPreview'
import PerformancePreview from '../components/perfomancePreview'

const Home: NextPage = () => {
    const [profilePhoto, setProfilePhoto] = useState<string>('')
    const { store } = useContext(ResumeContext)

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

    const performancesTitle: string = tr('performances', store.currentLang)

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.homePagePhotoWrapper}>
                    <img className={styles.homePagePhoto} src={profilePhoto} alt="photo" />
                    {/*<Image src={profilePhoto} width={200} height={200} />*/}
                </div>
                <div className={styles.performances}>
                    <div className={styles.performances__title}>{performancesTitle}</div>
                    <PerformancePreview src={'/static/homePagePhoto1.PNG'}>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut culpa
                            doloribus eaque enim explicabo, id incidunt ipsam magnam magni numquam,
                            officia placeat porro quis, similique sint soluta voluptatibus.
                            Provident.
                        </div>
                    </PerformancePreview>
                </div>
            </div>
        </Layout>
    )
}

export default Home
