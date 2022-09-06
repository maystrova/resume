import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { ResumeProvider } from 'context/storeContext'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ResumeProvider>
            <Component {...pageProps} />
        </ResumeProvider>
    )
}

export default MyApp
