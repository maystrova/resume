export enum LANGUAGE {
    RU = 'ru',
    EN = 'en',
}

export enum TRANSLATE_KEYS {
    NAME = 'name',
    PROFESSION = 'prof',
    HOME = 'home',
    ABOUT = 'about',
    PHOTO = 'photo',
    PROJECTS = 'projects',
}

type Translate = {
    translate: string
    key: TRANSLATE_KEYS
}

const TRANSLATE_RU: Translate[] = [
    { key: TRANSLATE_KEYS.NAME, translate: 'Ксения Попова' },
    { key: TRANSLATE_KEYS.PROFESSION, translate: 'Пианистка' },
    { key: TRANSLATE_KEYS.HOME, translate: 'Главная' },
    { key: TRANSLATE_KEYS.ABOUT, translate: 'Биография' },
    { key: TRANSLATE_KEYS.PHOTO, translate: 'Галерея' },
    { key: TRANSLATE_KEYS.PROJECTS, translate: 'Проекты' },
]

const TRANSLATE_EN: Translate[] = [
    { key: TRANSLATE_KEYS.NAME, translate: 'Kseniia Popova' },
    { key: TRANSLATE_KEYS.PROFESSION, translate: 'Pianist' },
    { key: TRANSLATE_KEYS.HOME, translate: 'Home' },
    { key: TRANSLATE_KEYS.ABOUT, translate: 'About' },
    { key: TRANSLATE_KEYS.PHOTO, translate: 'Photo' },
    { key: TRANSLATE_KEYS.PROJECTS, translate: 'Projects' },
]

const tr = (key: string, currentLang: LANGUAGE): string => {
    const hash = {
        [LANGUAGE.RU]: TRANSLATE_RU,
        [LANGUAGE.EN]: TRANSLATE_EN,
    }

    const currentTranslate = hash[currentLang]

    const translate: Translate | undefined = currentTranslate.find(tr => tr.key === key)

    if (translate !== undefined) {
        return translate.translate
    } else {
        return key
    }
}

export { tr }
