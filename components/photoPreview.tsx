import styles from 'styles/photoPreview.module.scss'

interface PhotoPreviewProps {
    src: string
}

const PhotoPreview = ({ src }: PhotoPreviewProps) => {
    return (
        <div className={styles.container}>
            <img src={src} />
        </div>
    )
}

export default PhotoPreview
