import { useContext, useEffect } from 'react'
import type { NextPage } from 'next'
import HomePage from 'components/homePage'
import Layout from 'components/layout'
import { ACTION } from 'context/actions'
import { ResumeContext } from 'context/storeContext'

const Home: NextPage = () => {
    const { dispatch } = useContext(ResumeContext)

    useEffect(() => {
        const currentValue = localStorage.getItem('currentLang')
        if (currentValue) {
            dispatch({ action: ACTION.SET_LANGUAGE, data: currentValue })
        }
    }, [])

    return (
        <Layout>
            <HomePage />
        </Layout>
    )
}

export default Home
