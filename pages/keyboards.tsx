import Head from "next/head"
import type { NextPage } from "next"
import keyboardData from "../data/keyboards"
import CardComponent from "../components/CardComponent"
import { CardComponentProps } from "../components/CardComponent"

const Keyboards: NextPage = () => {
    function buildCard(obj: CardComponentProps) {
        return (
            <div className="column min-width">
                <CardComponent
                    productName={obj.productName}
                    price={obj.price}
                    cur={obj.cur}
                    desc={obj.desc}
                    pic={obj.pic}
                />
            </div>
        )
    }
    const cards = keyboardData.keyboards.map(buildCard)
    return (
        <>
            <Head>
                <title>Shop - Awesome Keyboards</title>
            </Head>
            <div className="keyboards_marg">
                <div className="columns is-multiline">{cards}</div>
            </div>
        </>
    )
}
export default Keyboards