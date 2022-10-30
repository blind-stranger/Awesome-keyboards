import type { NextPage } from "next"
import Head from "next/head"
import CardComponent from "../components/CardComponent"
import { CardComponentProps } from "../components/CardComponent"
import keyboardData from "../data/keyboards"

const Keyboards: NextPage = () => {
    function buildCard(obj: CardComponentProps) {
        return (
            <div className="column is-one-quarter ">
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
            <div className="my_marg">
                <div className="columns is-multiline">{cards}</div>
            </div>
        </>
    )
}
export default Keyboards