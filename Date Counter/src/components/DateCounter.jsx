import { useState } from "react"
import DecreaseButton from "./DecreaseButton"
import IncreaseButton from "./IncreaseButton"

const DateCounter = ({step}) => {

    const [currentDate, setCurrentDate] = useState(new Date())
    const [inputDay, setInputDay] = useState(0)

    const dateIncreaseFunction = () => {

        setInputDay(Number(inputDay) + step)
        let date = new Date(currentDate)
        date.setDate(date.getDate() + step)
        setCurrentDate(date)
    }

    const dateDecreaseFunction = () => {
        setInputDay(inputDay - step)
        let date = new Date(currentDate)
        date.setDate(date.getDate() - step)
        setCurrentDate(date)
    }

    return (
        <>
        
            <div className="flex w-64 p-2 justify-between mx-auto">
                <DecreaseButton decreaseFunction={dateDecreaseFunction}/>
                <input type="number" className="border-blue border-5" value={inputDay} onChange={(e) => {
                    let date = new Date(currentDate)
                    date.setDate(date.getDate() + Number(e.target.value))
                    setInputDay(e.target.value)
                    setCurrentDate(date)
                }}></input>
                <IncreaseButton increaseFunction={dateIncreaseFunction}/>
            </div>
            <p>Date : {currentDate.toDateString()}</p>
        </>
    )
}

export default DateCounter