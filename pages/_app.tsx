import "../styles/globals.scss"
import Head from "next/head"
import type { AppProps } from "next/app"
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"
import RatingComponent from "../components/RatingComponent"

function AwesomeApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Awesome Keyboards</title>
            </Head>
            <HeaderComponent />
            <RatingComponent/>
            <Component {...pageProps} />
            <FooterComponent />
        </>
    )
}

export default AwesomeApp
