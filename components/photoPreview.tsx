import React from 'react'
import styles from 'styles/photoPreview.module.scss'

interface PhotoPreviewProps {
    onClick: () => void
    src: string
}

const PhotoPreview = ({ onClick, src }: PhotoPreviewProps) => {
    return (
        <div className={styles.container} onClick={onClick}>
            <img src={src} alt="image" />
        </div>
    )
}

export default PhotoPreview
