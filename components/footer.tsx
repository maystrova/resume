import styles from 'styles/footer.module.scss'

interface FooterProps {}

const Footer = ({}: FooterProps) => {
    const name: string = 'Kseniia Popova'
    return (
        <div className={styles.container}>
            <div>
                {new Date().getFullYear()} {name}
            </div>
        </div>
    )
}

export default Footer
