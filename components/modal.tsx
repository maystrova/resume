import React from 'react'
import styles from 'styles/modal.module.scss'

interface ModalWindowProps {
    isOpen: boolean
    onCancel: () => void
    children: React.ReactElement
}

const ModalWindow = ({ isOpen, onCancel, children }: ModalWindowProps) => {
    return (
        <div className={styles.modal}>
            <div className={styles.overlay} onClick={onCancel}></div>
            <div className={styles.container}>{children}</div>
        </div>
    )
}

export default ModalWindow
