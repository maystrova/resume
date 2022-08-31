import styles from 'styles/header.module.scss'
import { CONFIG } from 'service/config'
import Icon, { ICON_SIZE } from 'components/icon'
import Button from 'components/button'

interface HeaderProps {}

const name: string = 'Kseniia Popova'

interface SocialMediaLinks {
    href: string
    iconSrc: string
    alt: string
    id: number
}

interface HeaderMenu {
    title: string
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

    const MENU: HeaderMenu[] = [
        { title: 'Home', id: 1 },
        { title: 'About', id: 2 },
        { title: 'Photo', id: 3 },
        { title: 'Projects', id: 4 },
    ]
    return (
        <div className={styles.container}>
            <div>
                <h1>{name}</h1>
                <h3>Pianist</h3>
            </div>
            <div>
                <ul className={styles.menu}>
                    {MENU.map(item => {
                        return <li key={item.id}>{item.title}</li>
                    })}
                </ul>
            </div>
            <div>
                {SOCIAL_MEDIA_BUTTONS.map(item => {
                    return (
                        <Button onClick={() => {}} key={item.id}>
                            <a href={item.href} target="_blank">
                                <Icon src={item.iconSrc} alt={item.alt} size={ICON_SIZE.SMALL} />
                            </a>
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default Header
