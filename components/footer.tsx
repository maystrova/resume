import Icon, { ICON_SIZE } from 'components/icon'
import styles from 'styles/footer.module.scss'
import { useState } from 'react'
import Button, { BUTTON_TYPE } from './button'

interface FooterProps {}

const Footer = ({}: FooterProps) => {
    const [copySuccess, setCopySuccess] = useState<boolean>(false)

    const name: string = 'Kseniia Popova'
    const email: string = 'ksenia.popova93@gmail.com'
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.logo}>
                    {new Date().getFullYear()} {name}
                </div>
                <div className={styles.contacts}>
                    <Icon src={'static/mail-icon.svg'} alt={'icon'} size={ICON_SIZE.X_SMALL} />
                    <span className={styles.email}>{email}</span>
                    <div className={styles.copy}>
                        <Button
                            onClick={() => {
                                navigator.clipboard
                                    .writeText(email)
                                    .then(() => {
                                        setCopySuccess(true)
                                    })
                                    .catch(error => {
                                        console.log(error)
                                    })
                            }}
                            btnType={BUTTON_TYPE.CLOSE_WINDOW}
                        >
                            <Icon
                                src={
                                    copySuccess ? 'static/success-icon.svg' : 'static/copy-icon.svg'
                                }
                                alt={'Copy'}
                                size={ICON_SIZE.SMALL}
                            />
                        </Button>
                        {copySuccess && <span>Copied!</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
