import React from 'react'
import style from 'styles/button.module.scss'

export enum BUTTON_TYPE {
    LANG_CHANGE = 'lang',
    SOCIAL_MEDIA = 'socialMedia',
    CLOSE_WINDOW = 'closeWindow',
    NAVIGATION = 'navigation',
}

interface ButtonProps {
    onClick: () => void
    children: React.ReactElement
    btnType: BUTTON_TYPE
}

const buttonTypeHandler = (type: BUTTON_TYPE): string => {
    switch (type) {
        case BUTTON_TYPE.LANG_CHANGE:
            return style.lang
        case BUTTON_TYPE.SOCIAL_MEDIA:
            return style.socialMedia
        case BUTTON_TYPE.CLOSE_WINDOW:
            return style.close
        case BUTTON_TYPE.NAVIGATION:
            return style.navigation
    }
}

const Button = ({ onClick, children, btnType }: ButtonProps) => {
    return (
        <button onClick={onClick} className={buttonTypeHandler(btnType)}>
            {children}
        </button>
    )
}

export default Button
