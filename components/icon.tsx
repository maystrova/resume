import style from 'styles/icon.module.scss'

export enum ICON_SIZE {
    X_SMALL = 'x-small',
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
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
        case ICON_SIZE.X_SMALL:
            return style.x_small
        case ICON_SIZE.LARGE:
            return style.large
    }
    return style.small
}

const Icon = ({ src, alt, size }: IconProps) => {
    return <img src={src} alt={alt} className={iconSizeHandler(size)} />
}

export default Icon
