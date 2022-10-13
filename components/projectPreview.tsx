import React from 'react'
import styles from 'styles/projectPreview.module.scss'

interface ProjectPreviewProps {
    children: React.ReactElement
}

const ProjectPreview = ({ children }: ProjectPreviewProps) => {
    return <div className={styles.container}>{children}</div>
}

export default ProjectPreview
