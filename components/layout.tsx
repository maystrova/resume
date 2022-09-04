import React from 'react'
import Head from 'next/head'
import styles from 'styles/layout.module.scss'

interface LayoutProps {
    children: React.ReactElement | React.ReactComponentElement<any> | React.ReactNode
    title?: string
}

const Layout = ({ children, title = 'Kseniia Popova official website' }: LayoutProps) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
            </Head>
            <div>{children}</div>
        </div>
    )
}

export default Layout
