import { useState } from "react"
import Button from "./Button"


const Splitter = ({selectedResource, handleCancel, handleSplit, handlePaidData}) => {


    return (
        <div className="bg-orange-200 w-[400px] h-[300px] ml-32 rounded-xl flex flex-col p-6">
            <p className="p-2">SPLIT A BILL WITH {selectedResource.name.toUpperCase()}</p>
            <div className="p-2 flex justify-between">
                <label>Bill value</label>
                <input type="number" name="total" className="w-20" onChange={handlePaidData}></input>
            </div>
            <div className="p-2 flex justify-between">
                <label>Machine expense</label>
                <input type="number" name="machine" className="w-20" onChange={handlePaidData}></input>
            </div>
            <div className="p-2 flex justify-between">
                <label>{selectedResource.name} expense</label>
                <input type="number" name="friend" className="w-20" onChange={handlePaidData}></input>
            </div>
            <div className="p-2 flex justify-between">
                <label>Who is paying the bill ?</label>
                <select name="paidPerson" onChange={handlePaidData}>
                    <option>machine</option>
                    <option>{selectedResource.name}</option>
                </select>
            </div>
            <div className="ml-4 p-4 flex justify-between">
                <Button handleButtonFuntion = {handleSplit} buttonName = {"Split"}/>
                <Button handleButtonFuntion={handleCancel} buttonName={"Cancel"}/>
            </div>
        </div>
    )
}

export default Splitter