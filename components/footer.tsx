import { useState } from 'react'

import Icon, { ICON_SIZE } from 'components/icon'

import styles from 'styles/footer.module.scss'

interface FooterProps {}

const Footer = ({}: FooterProps) => {
    const [copySuccess, setCopySuccess] = useState<boolean>(false)

    const name: string = 'Kseniia Popova'
    const email: string = 'ksenia.popova93@gmail.com'

    const copyEmail = () => {
        navigator.clipboard
            .writeText(email)
            .then(() => {
                setCopySuccess(true)
                setTimeout(() => {
                    setCopySuccess(false)
                }, 1000)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className={styles.footer} id={'footer'}>
            <div className={styles.main}>
                <div className={styles.logo}>
                    {new Date().getFullYear()} {name}
                </div>
                <div className={styles.contacts} onClick={copyEmail}>
                    <Icon src={'static/mail-icon.svg'} alt={'icon'} size={ICON_SIZE.X_SMALL} />
                    <span className={styles.email}>{email}</span>
                    <span className={copySuccess ? styles.copy_success : styles.hide}>Copied!</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
