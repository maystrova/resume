import style from 'styles/icon.module.scss'

export enum ICON_SIZE {
    SMALL = 'small',
    MEDIUM = 'medium',
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
        case ICON_SIZE.MEDIUM:
            return style.medium
    }
    return style.small
}

const Icon = ({ src, alt, size }: IconProps) => {
    return <img src={src} alt={alt} className={iconSizeHandler(size)} />
}

export default Icon
