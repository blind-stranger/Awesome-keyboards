import Image from "next/image"
import { useState } from "react"

export type CardComponentProps = {
    productName: string
    price: number | string
    desc: string
    pic: string
    cur: "₽" | "RUB"
}

function CardComponent(props: CardComponentProps): JSX.Element {
    const [buttonText, setButtonText] = useState("B корзину")
    const [buttonClass, setButtonClass] = useState("button is-primary")
    const [inList, setInList] = useState(false)

    function addToCart() {
        if (inList) {
            setInList(false)
            setButtonText("B корзину")
            setButtonClass("button is-primary")
        } else {
            setInList(true)
            setButtonText("B корзине!")
            setButtonClass("button is-primary is-light")
        }
    }

    return (
        <div className="card max-width my_border is-clickable">
            <div className="card-image">
                <figure className="image">
                    <Image
                        src={props.pic}
                        alt={props.productName}
                        width="1280px"
                        height="960px"
                    />
                </figure>
            </div>
            <div className="card-content card-text">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.productName}</p>
                        <p className="subtitle is-5">
                            {props.price} {props.cur}
                        </p>
                    </div>
                </div>
                <div className="content">{props.desc}</div>
            </div>
            <div className="card-content">
                <button className={buttonClass} onClick={addToCart}>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default CardComponent