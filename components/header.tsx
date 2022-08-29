import styles from 'styles/header.module.scss'
import { CONFIG } from 'service/config'
import Icon, { ICON_SIZE } from './icon'
import Button from './button'

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
            <div>
                <h1>{name}</h1>
                <h3>Pianist</h3>
            </div>
            <div>
                {SOCIAL_MEDIA_BUTTONS.map(item => {
                    return (
                        <Button onClick={() => {}} key={item.id}>
                            <Icon src={item.iconSrc} alt={item.alt} size={ICON_SIZE.SMALL} />
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default Header
