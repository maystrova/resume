import styles from 'styles/header.module.scss'
import { CONFIG } from 'service/config'

interface HeaderProps {}

const name: string = 'Ksenia Popova'

interface SocialMediaLinks {
    href: string
    iconSrc: string
    alt: string
    id: number
}

const Header = ({}: HeaderProps) => {
    const SOCIAL_MEDIA_BUTTONS: SocialMediaLinks[] = [
        {
            href: `${CONFIG.instagramLink}`,
            id: 1,
            alt: 'Instagram',
            iconSrc: '/static/instagram-logo.svg',
        },
        {
            href: `${CONFIG.facebookLink}`,
            id: 1,
            alt: 'Instagram',
            iconSrc: '/static/facebook-logo.svg',
        },
        { href: `${CONFIG.vkLink}`, id: 1, alt: 'Instagram', iconSrc: '/static/vk-logo.svg' },
    ]
    return (
        <div className={styles.container}>
            <h1>{name}</h1>
            {SOCIAL_MEDIA_BUTTONS.map(item => {
                return (
                    <button key={item.id}>
                        <img src={item.iconSrc} alt={item.alt} />
                    </button>
                )
            })}
        </div>
    )
}

export default Header
