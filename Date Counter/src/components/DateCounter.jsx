import { useState } from "react"
import DecreaseButton from "./DecreaseButton"
import IncreaseButton from "./IncreaseButton"

const DateCounter = ({step}) => {

    const [currentDate, setCurrentDate] = useState(new Date())
    
    const dateIncreaseFunction = () => {
        let date = new Date(currentDate)
        date.setDate(date.getDate() + step)
        setCurrentDate(date)
    }

    const dateDecreaseFunction = () => {
        let date = new Date(currentDate)
        date.setDate(date.getDate() - step)
        setCurrentDate(date)
    }

    return (
        <div className="flex w-64 p-2 justify-between mx-auto">
            <DecreaseButton decreaseFunction={dateDecreaseFunction}/>
            <p>Date : {currentDate.toDateString()}</p>
            <IncreaseButton increaseFunction={dateIncreaseFunction}/>
        </div>
    )
}

export default DateCounter