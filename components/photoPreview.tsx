import styles from 'styles/photoPreview.module.scss'

interface PhotoPreviewProps {
    // src: string
    onClick: () => void
}

const PhotoPreview = ({ onClick }: PhotoPreviewProps) => {
    return <div className={styles.container} onClick={onClick}></div>
}

export default PhotoPreview
