import styles from 'styles/header.module.scss'
import { CONFIG } from 'service/config'
import Icon, { ICON_SIZE } from 'components/icon'
import Button, { BUTTON_TYPE } from 'components/button'

interface HeaderProps {}

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

interface LangChangeMenu {
    title: string
    id: number
    onClick: () => void
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

    const LANG_MENU: LangChangeMenu[] = [
        { title: 'Ru', id: 1, onClick: () => {} },
        { title: 'En', id: 2, onClick: () => {} },
    ]

    const name: string = 'Kseniia Popova'
    const prof: string = 'Pianist'

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <h1 className={styles.name}>{name}</h1>
                <h3 className={styles.prof}>{prof}</h3>
            </div>
            <div>
                <ul className={styles.menu__main}>
                    {MENU.map(item => {
                        return <li key={item.id}>{item.title}</li>
                    })}
                </ul>
            </div>
            <div>
                {SOCIAL_MEDIA_BUTTONS.map(item => {
                    return (
                        <Button btnType={BUTTON_TYPE.SOCIAL_MEDIA} onClick={() => {}} key={item.id}>
                            <a href={item.href} target="_blank">
                                <Icon src={item.iconSrc} alt={item.alt} size={ICON_SIZE.MEDIUM} />
                            </a>
                        </Button>
                    )
                })}
            </div>
            {/*<Button onClick={() => {}}>*/}
            {/*    <Icon src={'/static/lang.svg'} alt={'language'} size={ICON_SIZE.SMALL} />*/}
            {/*</Button>*/}
            {/*<ul className={styles.menu__lang}>*/}
            {/*    {LANG_MENU.map(item => {*/}
            {/*        return (*/}
            {/*            <li key={item.id} onClick={item.onClick}>*/}
            {/*                {item.title}*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
            <div>
                {LANG_MENU.map(item => {
                    return (
                        <Button
                            btnType={BUTTON_TYPE.LANG_CHANGE}
                            key={item.id}
                            onClick={item.onClick}
                        >
                            <span>{item.title}</span>
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default Header
