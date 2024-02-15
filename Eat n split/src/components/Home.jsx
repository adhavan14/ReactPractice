import { useState } from "react"
import AddFriend from "./AddFriend"
import FriendsList from "./FriendsList"
import Header from "./Header"
import Resources from "../resources/Resources"

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

    return (
        <div>
            <Header/>
            <div className="flex items-start ml-20 mt-3 w-[800px] justify-evenly">
            <AddFriend handleAddResources={handleAddResources} handleInputData={handleInputData} inputData={inputData}/>
            <FriendsList resources={resources}/>
            </div>
        </div>
    )
}

export default Home

