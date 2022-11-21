import React, { useEffect, useState } from 'react'

import Layout from 'components/layout'
import PhotoPreview from 'components/photoPreview'
import ModalWindow from 'components/modal'
import Button, { BUTTON_TYPE } from 'components/button'
import Icon, { ICON_SIZE } from 'components/icon'

import { getFileFromStorage } from 'service/storage'
import { Photo } from 'service/type'

import styles from 'styles/photos.module.scss'

interface PhotosPageProps {}

const PhotosPage = ({}: PhotosPageProps) => {
    const [paths, setPaths] = useState<string[]>([])
    const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(null)
    const modalIsOpen = currentPhoto != null

    const preparedPaths: string[] = [
        '/IMG_0838.PNG',
        '/IMG_0841.PNG',
        '/IMG_1518.JPG',
        '/IMG_1519.JPG',
        '/IMG_1520.JPG',
    ]

    const downloadPaths = async () => {
        try {
            let downloadedPaths: string[] = []
            for (let path of preparedPaths) {
                const ps = await getFileFromStorage(path)
                if (ps) {
                    downloadedPaths.push(ps)
                }
            }
            setPaths(downloadedPaths)
        } catch (error) {
            console.error('downloadPaths', error)
        }
    }

    useEffect(() => {
        downloadPaths()
    }, [])

    const PHOTOS: Photo[] = [
        { src: paths[0], id: 0 },
        { src: paths[1], id: 1 },
        { src: paths[2], id: 2 },
        { src: paths[3], id: 3 },
        { src: paths[4], id: 4 },
    ]

    const changeSlide = (direction: string) => {
        if (direction === 'right') {
            if (currentPhoto) {
                const currentIndexPhoto = PHOTOS.findIndex(photo => photo.id === currentPhoto.id)
                setCurrentPhoto(
                    currentIndexPhoto === PHOTOS.length - 1
                        ? PHOTOS[0]
                        : PHOTOS[currentIndexPhoto + 1],
                )
            }
        } else if (direction === 'left') {
            if (currentPhoto) {
                const currentIndexPhoto = PHOTOS.findIndex(photo => photo.id === currentPhoto.id)
                setCurrentPhoto(
                    currentIndexPhoto === 0
                        ? PHOTOS[PHOTOS.length - 1]
                        : PHOTOS[currentIndexPhoto - 1],
                )
            }
        }
    }

    const handleKeydown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowRight') {
            changeSlide('right')
        } else if (event.key === 'ArrowLeft') {
            changeSlide('left')
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeydown)

        return () => {
            window.removeEventListener('keydown', handleKeydown)
        }
    })

    return (
        <Layout>
            <div className={styles.photos}>
                {PHOTOS.map(photo => {
                    return (
                        <div key={photo.id} className={styles.photoPreview_wrapper}>
                            <PhotoPreview
                                key={photo.id}
                                onClick={() => {
                                    setCurrentPhoto(photo)
                                }}
                                style={{ backgroundImage: `url("${photo.src}")` }}
                            />
                        </div>
                    )
                })}
            </div>
            {modalIsOpen && (
                <ModalWindow isOpen={modalIsOpen} onCancel={() => setCurrentPhoto(null)}>
                    <div className={styles.slider}>
                        <div className={styles.button_left}>
                            <Button
                                onClick={() => changeSlide('left')}
                                btnType={BUTTON_TYPE.NAVIGATION}
                            >
                                <Icon
                                    src={'static/left-icon.svg'}
                                    alt={'back'}
                                    size={ICON_SIZE.LARGE}
                                />
                            </Button>
                        </div>

                        <div>
                            <img className={styles.main} src={currentPhoto.src} alt="img" />
                        </div>
                        <div className={styles.button_right}>
                            <Button
                                onClick={() => changeSlide('right')}
                                btnType={BUTTON_TYPE.NAVIGATION}
                            >
                                <Icon
                                    src={'static/right-icon.svg'}
                                    alt={'forward'}
                                    size={ICON_SIZE.LARGE}
                                />
                            </Button>
                        </div>
                    </div>
                </ModalWindow>
            )}
        </Layout>
    )
}

export default PhotosPage
