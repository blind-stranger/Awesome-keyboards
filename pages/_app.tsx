import "../styles/globals.scss"
import type { AppProps } from "next/app"
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Awesome Keyboards</title>
            </Head>
            <HeaderComponent />
            <Component {...pageProps} />
            <FooterComponent />
        </>
    )
}

export default MyApp
