import { useState } from "react"
import DecreaseButton from "./DecreaseButton"
import IncreaseButton from "./IncreaseButton"
import DateCounter from "./DateCounter"

const StepCounter = () => {

    const [step, setStep] = useState(1)

    const increaseFunction = () => {
        setStep(step + 1)
    }

    const decreaseFunction = () => {
        if (step > 1)
            setStep(step - 1)
    }

    return (
        <>
            <div className="flex w-36 p-2 justify-between mx-auto">
                <DecreaseButton decreaseFunction = {decreaseFunction}/>
                <p>Step : {step}</p>
                <IncreaseButton increaseFunction = {increaseFunction}/>
            </div>
            <DateCounter step = {step}/>
        </>
    )
}

export default StepCounter