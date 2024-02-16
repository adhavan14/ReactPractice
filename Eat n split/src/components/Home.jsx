import { useState } from "react"
import AddFriend from "./AddFriend"
import FriendsList from "./FriendsList"
import Header from "./Header"
import Resources from "../resources/Resources"
import Splitter from "./Splitter"

const Home = () => {


    const [resources, setResources] = useState(Resources)

    const [inputData, setInputData] = useState({
        name : "",
        amount : 0,
        imageUrl : ""
    })


    const handleInputData = (e) => {
        const {name, value} = e.target
        setInputData({
            ...inputData,
            [name] : value
        })
    }

    const handleAddResources = () => {
        setResources(resources => [...resources, inputData])
        setInputData({
            name : "",
            amount : 0,
            imageUrl : ""
        })
    }

    const handleUpdateAmount = (paidData, isSelected) => {
        
        const tempResources = resources

        let amount = paidData.machine

        if (paidData.paidPerson != isSelected.name) {
            amount = -paidData.friend
        }

        tempResources.map(resource => {
            if (resource.name == isSelected.name) {
                resource.amount = amount
            }
        })

        console.log(tempResources)

        setResources(tempResources)
    }

    return (
        <div>
            <Header/>
            <div className="flex items-start ml-40 mt-3 w-[1400px]">
                <AddFriend handleAddResources={handleAddResources} handleInputData={handleInputData} inputData={inputData}/>
                <FriendsList resources={resources} handleUpdateAmount={handleUpdateAmount}/>
            </div>
        </div>
    )
}

export default Home

