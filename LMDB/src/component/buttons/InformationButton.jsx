import { useState } from "react"

const InformationButton = ({handleOpen}) => {


    return (
        <div className="hover:bg-gray-300 ml-12 rounded-md w-10 flex justify-center">
            <button onClick={handleOpen}><img src="/src/resources/information.png" className="w-5"></img></button>
        </div>
    )
}

export default InformationButton