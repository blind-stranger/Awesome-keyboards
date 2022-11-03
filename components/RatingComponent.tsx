import { useState } from "react"
import StarComponent from "./StarComponent"

function RatingComponent(): JSX.Element {
    
    const [rating, setRating] = useState(0)

    const starArray = [
        <StarComponent filled={1 <= rating} setRating={() => setRating(1)} key="star_1"/>,
        <StarComponent filled={2 <= rating} setRating={() => setRating(2)} key="star_2"/>,
        <StarComponent filled={3 <= rating} setRating={() => setRating(3)} key="star_3"/>,
        <StarComponent filled={4 <= rating} setRating={() => setRating(4)} key="star_4"/>,
        <StarComponent filled={5 <= rating} setRating={() => setRating(5)} key="star_5"/>,
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
