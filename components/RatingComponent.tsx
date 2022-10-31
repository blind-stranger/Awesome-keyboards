import { useState } from "react"
import StarComponent from "./StarComponent"

function RatingComponent(): JSX.Element {
    const starArray = [
        <StarComponent key="1"/>,
        <StarComponent key="2"/>,
        <StarComponent key="3"/>,
        <StarComponent key="4"/>,
        <StarComponent key="5"/>,
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
