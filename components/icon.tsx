import style from 'styles/icon.module.scss'

export enum ICON_SIZE {
    SMALL = 'small',
}

interface IconProps {
    src: string
    alt: string
    size: ICON_SIZE
}

const iconSizeHandler = (size: ICON_SIZE): string => {
    switch (size) {
        case ICON_SIZE.SMALL:
            return style.small
    }
    return style.small
}

const Icon = ({ src, alt, size }: IconProps) => {
    return <img src={src} alt={alt} className={iconSizeHandler(size)} />
}

export default Icon
