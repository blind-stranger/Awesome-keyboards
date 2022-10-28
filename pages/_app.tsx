import "../styles/globals.scss"
import type { AppProps } from "next/app"
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <HeaderComponent />
            <Component {...pageProps} />
            <FooterComponent/>
        </>
    )
}

export default MyApp
