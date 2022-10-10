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
    MEDIA = 'media',
    PROJECTS = 'projects',
    BIOGRAPHY = 'biography',
    PERFORMANCES = 'performances',
    TALKS = 'talks',
    RACHMANINOFF = 'rachmaninoff',
    SHNITKE = 'shnitke',
    SHORT_PROGRAM = 'program',
    SVIRIDOFF = 'sviridoff',
    DARGOMYZHSKY = 'darg',
    DUO = 'duo',
    DUO2 = 'duo2',
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
    { key: TRANSLATE_KEYS.MEDIA, translate: 'Медиа' },
    { key: TRANSLATE_KEYS.TALKS, translate: 'Разговоры за клавиром' },
    {
        key: TRANSLATE_KEYS.RACHMANINOFF,
        translate: 'С.Рахманинов, прелюдия соль-диез минор, op. 32 №12',
    },
    {
        key: TRANSLATE_KEYS.SHNITKE,
        translate: 'Шниткe. Гоголь-сюита (Шинель, Бал)',
    },
    { key: TRANSLATE_KEYS.SHORT_PROGRAM, translate: 'Короткая программа' },
    { key: TRANSLATE_KEYS.SVIRIDOFF, translate: 'Г. Свиридов "Невеста" (слова А. Блока)' },
    {
        key: TRANSLATE_KEYS.DARGOMYZHSKY,
        translate: 'А. Даргомыжский "Я все еще его люблю" (слова Ю. Жадовской)',
    },
    {
        key: TRANSLATE_KEYS.DUO,
        translate: 'Ксения Попова (фортепиано), Вероника Токарева (меццо-сопрано)',
    },
    {
        key: TRANSLATE_KEYS.DUO2,
        translate: 'Ксения Попова (фортепиано), Екатерина Журавлева (сопрано)',
    },
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
    { key: TRANSLATE_KEYS.MEDIA, translate: 'Media' },
    { key: TRANSLATE_KEYS.TALKS, translate: 'Clavier talks' },
    {
        key: TRANSLATE_KEYS.RACHMANINOFF,
        translate: 'Rachmaninoff S. Prelude gis-moll op. 32 №12',
    },
    {
        key: TRANSLATE_KEYS.SHNITKE,
        translate: 'Shnitke. Gogol - suite (Two pieces: Uniform; Ball)',
    },
    { key: TRANSLATE_KEYS.SHORT_PROGRAM, translate: 'Short Program' },
    { key: TRANSLATE_KEYS.SVIRIDOFF, translate: 'G. Sviridoff "Bride" (A. Block)' },
    {
        key: TRANSLATE_KEYS.DARGOMYZHSKY,
        translate: 'A. Dargomyzhskiy "I still love him" (Y. Zhadovskaya)',
    },
    {
        key: TRANSLATE_KEYS.DUO,
        translate: 'Kseniia Popova (piano), Veronika Tokareva (mezzo-soprano)',
    },
    {
        key: TRANSLATE_KEYS.DUO2,
        translate: 'Kseniia Popova (piano), Ekaterina Zhuravleva (soprano)',
    },
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
