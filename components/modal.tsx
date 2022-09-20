import React from 'react'
import styles from 'styles/modal.module.scss'
import Icon, { ICON_SIZE } from './icon'

interface ModalWindowProps {
    isOpen: boolean
    onCancel: () => void
    children: React.ReactElement
}

const ModalWindow = ({ isOpen, onCancel, children }: ModalWindowProps) => {
    return (
        <div className={styles.modal}>
            <div className={styles.overlay} onClick={onCancel}></div>
            <div className={styles.container}>
                <header>
                    <Icon src={'/static/close-icon.svg'} alt={'Close'} size={ICON_SIZE.SMALL} />
                </header>
                {children}
            </div>
        </div>
    )
}

export default ModalWindow
