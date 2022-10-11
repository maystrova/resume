import styles from 'styles/footer.module.scss'
import Icon, { ICON_SIZE } from './icon'

interface FooterProps {}

const Footer = ({}: FooterProps) => {
    const name: string = 'Kseniia Popova'
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.logo}>
                    {new Date().getFullYear()} {name}
                </div>
                <div className={styles.contacts}>
                    <Icon src={'static/mail-icon.svg'} alt={'icon'} size={ICON_SIZE.X_SMALL} />
                    <span>ksenia.popova93@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
