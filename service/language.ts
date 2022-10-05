import { biographyRu, biographyEn } from 'service/biography'

export enum LANGUAGE {
    RU = 'ru',
    EN = 'en',
}

export enum TRANSLATE_KEYS {
    NAME = 'name',
    PROFESSION = 'prof',
    HOME = 'home',
    ABOUT = 'about',
    PHOTO = 'photos',
    PROJECTS = 'projects',
    BIOGRAPHY = 'biography',
    PERFORMANCES = 'performances',
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
    { key: TRANSLATE_KEYS.BIOGRAPHY, translate: biographyRu },
    { key: TRANSLATE_KEYS.PERFORMANCES, translate: 'Ближайшие выступления' },
]

const TRANSLATE_EN: Translate[] = [
    { key: TRANSLATE_KEYS.NAME, translate: 'Kseniia Popova' },
    { key: TRANSLATE_KEYS.PROFESSION, translate: 'Pianist' },
    { key: TRANSLATE_KEYS.HOME, translate: 'Home' },
    { key: TRANSLATE_KEYS.ABOUT, translate: 'About' },
    { key: TRANSLATE_KEYS.PHOTO, translate: 'Photos' },
    { key: TRANSLATE_KEYS.PROJECTS, translate: 'Projects' },
    { key: TRANSLATE_KEYS.BIOGRAPHY, translate: biographyEn },
    { key: TRANSLATE_KEYS.PERFORMANCES, translate: 'Upcoming performances' },
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
