import { useState } from "react"

const Status = ({packageList, packedItem}) => {

    return (
        <div className="flex justify-center items-center p-4">
            <img src="/src/resources/travel-bag-or-luggage-suitcase-logo-design-vector-32284043.jpg" className="w-10"></img>
            <h3 className="p-4 text-xl">you have {packageList.length} items on your list, and you already packed {packedItem} </h3>
        </div>
    )
}

export default Status