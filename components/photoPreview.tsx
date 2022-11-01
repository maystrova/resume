import React from 'react'
import styles from 'styles/photoPreview.module.scss'

interface PhotoPreviewProps {
    onClick: () => void
    style: any
}

const PhotoPreview = ({ onClick, style }: PhotoPreviewProps) => {
    return <div className={styles.container} onClick={onClick} style={style}></div>
}

export default PhotoPreview
