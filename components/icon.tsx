export enum ICON_SIZE {
    XX_SMALL = 'xx-small',
    X_SMALL = 'x-small',
    SMALL = 'small',
    MEDIUM = 'medium',
    BIG = 'big',
    LARGE = 'large',
}

interface IconProps {
    src: string
    alt: string
    size: ICON_SIZE
}

const Icon = ({ src, alt, size }: IconProps) => {
    return <img src={src} alt={alt} />
}

export default Icon
