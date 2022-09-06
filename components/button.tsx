import React from 'react'
import style from 'styles/button.module.scss'

export enum BUTTON_TYPE {
    LANG_CHANGE = 'lang',
    SOCIAL_MEDIA = 'socialMedia',
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
