import React from 'react'
import styles from 'styles/performancePreview.module.scss'

interface PerformancePreviewProps {
    src: string
    children: React.ReactElement
}

const PerformancePreview = ({ src, children }: PerformancePreviewProps) => {
    return (
        <div className={styles.container}>
            <img className={styles.photo} src={src} alt="image" />
            <div>{children}</div>
        </div>
    )
}

export default PerformancePreview
