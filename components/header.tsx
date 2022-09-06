import styles from 'styles/header.module.scss'
import { CONFIG } from 'service/config'
import Icon, { ICON_SIZE } from 'components/icon'
import Button, { BUTTON_TYPE } from 'components/button'
import { useContext, useEffect, useState } from 'react'
import { ResumeContext } from 'context/storeContext'
import { ACTION } from 'context/actions'
import { LANGUAGE, tr } from 'service/language'
import Link from 'next/link'

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
    href: string
}

interface LangChangeMenu {
    title: string
    id: number
    langValue: LANGUAGE
}

const Header = ({}: HeaderProps) => {
    const { store, dispatch } = useContext(ResumeContext)
    const [langBtn, setLangBtn] = useState<boolean>(false)

    const SOCIAL_MEDIA_BUTTONS: SocialMediaLinks[] = [
        {
            href: `${CONFIG.instagramLink}`,
            id: 1,
            alt: 'Instagram',
            iconSrc: '/static/instagram-logo.svg',
        },
        {
            href: `${CONFIG.facebookLink}`,
            id: 2,
            alt: 'Instagram',
            iconSrc: '/static/facebook-logo.svg',
        },
        { href: `${CONFIG.vkLink}`, id: 3, alt: 'Instagram', iconSrc: '/static/vk-logo.svg' },
        {
            href: `${CONFIG.telegramLink}`,
            id: 4,
            alt: 'Telegram',
            iconSrc: '/static/telegram-logo.svg',
        },
    ]

    const MENU: HeaderMenu[] = [
        { title: tr('home', store.currentLang), id: 1, href: '/' },
        { title: tr('about', store.currentLang), id: 2, href: '/about' },
        { title: tr('photo', store.currentLang), id: 3, href: '/photo' },
        { title: tr('projects', store.currentLang), id: 4, href: '/projects' },
    ]

    const LANG_MENU: LangChangeMenu[] = [
        {
            title: 'Ru',
            id: 1,
            langValue: LANGUAGE.RU,
        },
        {
            title: 'En',
            id: 2,
            langValue: LANGUAGE.EN,
        },
    ]

    const name: string = tr('name', store.currentLang)
    const prof: string = tr('prof', store.currentLang)

    return (
        <div className={styles.container}>
            <Link href={'/'}>
                <div className={styles.logo}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.prof}>{prof}</div>
                </div>
            </Link>
            <div>
                <ul className={styles.menu__main}>
                    {MENU.map(item => {
                        return (
                            <li key={item.id}>
                                <Link href={item.href}>
                                    <a>{item.title}</a>
                                </Link>
                            </li>
                        )
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
            <div>
                {LANG_MENU.map(item => {
                    return (
                        <Button
                            btnType={BUTTON_TYPE.LANG_CHANGE}
                            key={item.id}
                            onClick={() => {
                                dispatch({ action: ACTION.SET_LANGUAGE, data: item.langValue })
                                localStorage.setItem('currentLang', item.langValue)
                            }}
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
