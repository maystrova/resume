import React from 'react'
import style from 'styles/button.module.scss'

interface ButtonProps {
    onClick: () => void
    children: React.ReactElement
}

const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button onClick={onClick} className={style.container}>
            {children}
        </button>
    )
}

export default Button
