import { useState } from "react"
import StarComponent from "./StarComponent"

function RatingComponent(): JSX.Element {
    const starArray = [
        <StarComponent key="star_1"/>,
        <StarComponent key="star_2"/>,
        <StarComponent key="star_3"/>,
        <StarComponent key="star_4"/>,
        <StarComponent key="star_5"/>,
    ]
    return (
        <div className="is-flex is-justify-content-center pt-6">
            <ul className="stars is-inline-block">
                {starArray}
            </ul>
        </div>
    )
}

export default RatingComponent
