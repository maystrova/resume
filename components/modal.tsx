import React from 'react'
import styles from 'styles/modal.module.scss'
import Icon, { ICON_SIZE } from './icon'
import Button, { BUTTON_TYPE } from './button'

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
                <header className={styles.header}>
                    <Button onClick={onCancel} btnType={BUTTON_TYPE.CLOSE_WINDOW}>
                        <Icon src={'/static/close-icon.svg'} alt={'Close'} size={ICON_SIZE.SMALL} />
                    </Button>
                </header>
                {children}
            </div>
        </div>
    )
}

export default ModalWindow
