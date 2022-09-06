import styles from 'styles/footer.module.scss'
import Link from 'next/link'

interface FooterProps {}

const Footer = ({}: FooterProps) => {
    const name: string = 'Kseniia Popova'
    return (
        <div className={styles.container}>
            <Link href={'/'}>
                <div className={styles.logo}>
                    {new Date().getFullYear()} {name}
                </div>
            </Link>
        </div>
    )
}

export default Footer
