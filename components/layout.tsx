import React from 'react'
import Head from 'next/head'
import styles from 'styles/layout.module.scss'
import Header from './header'

interface LayoutProps {
    children: React.ReactElement | React.ReactComponentElement<any> | React.ReactNode
    title?: string
}

const Layout = ({ children, title = 'Kseniia Popova - Official website' }: LayoutProps) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/piano.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Titillium+Web&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default Layout
