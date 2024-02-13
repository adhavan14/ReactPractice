import { useState } from "react"
import DecreaseButton from "./DecreaseButton"
import IncreaseButton from "./IncreaseButton"
import DateCounter from "./DateCounter"

const StepCounter = () => {

    const [step, setStep] = useState(1)

    
    return (
        <>
            <div className="flex w-36 p-2 justify-between mx-auto">
                <input type="range" min={1} max={10} value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
                <p className="p-2">{step}</p>
            </div>
            <DateCounter step = {step}/>
        </>
    )
}

export default StepCounter