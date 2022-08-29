export enum LANGUAGE {
    RU = 'ru',
    EN = 'en',
}

export enum TRANSLATE_KEYS {
    NAME = 'name',
}

type Translate = {
    translate: string
    key: TRANSLATE_KEYS
}

const TRANSLATE_RU: Translate[] = [{ key: TRANSLATE_KEYS.NAME, translate: 'Ксения Попова' }]

const TRANSLATE_EN: Translate[] = [{ key: TRANSLATE_KEYS.NAME, translate: 'Ksenia Popova' }]

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
