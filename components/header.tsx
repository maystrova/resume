import styles from 'styles/header.module.scss'
import { CONFIG } from 'service/config'
import Icon, { ICON_SIZE } from 'components/icon'
import Button, { BUTTON_TYPE } from 'components/button'
import { useContext, useEffect } from 'react'
import { ResumeContext } from 'context/storeContext'
import { ACTION } from 'context/actions'
import { LANGUAGE, tr } from 'service/language'

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
    langValue: LANGUAGE
}

const Header = ({}: HeaderProps) => {
    const { store, dispatch } = useContext(ResumeContext)

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
        { title: tr('home', store.currentLang), id: 1 },
        { title: tr('about', store.currentLang), id: 2 },
        { title: tr('photo', store.currentLang), id: 3 },
        { title: tr('projects', store.currentLang), id: 4 },
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

    useEffect(() => {
        const currentValue = localStorage.getItem('currentLang')
        if (currentValue) {
            dispatch({ action: ACTION.SET_LANGUAGE, data: currentValue })
        }
    }, [])

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
