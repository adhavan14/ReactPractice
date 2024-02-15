import { useState } from "react"
import Bill from "./Bill"
import FriendTip from "./FriendTip"
import MyTip from "./MyTip"
import TotalAmount from "./TotalAmount"

const Home = () => {

    const [bill, setBill] = useState(0)

    const [myTip, setMyTip] = useState(0)

    const [friendTip, setFriendTip] = useState(0)


    const handleBill = (bill) => {
        setBill(bill)
    }

    const handleMyTip = (e) => {
        const tip = calculateTip(e)
        setMyTip(tip)
    }

    const handleFriendTip = (e) => {
        const tip = calculateTip(e)
        setFriendTip(tip)
    }

    function calculateTip(e){
        let tip = 0
        const option = e.target.value
        if (option == "It was okay (5%)") {
            tip = (bill * 5)/100
        } else if (option == "It was good (10%)") {
            tip = (bill * 10)/100
        } else if (option == "Absolutely amazing (20%)") {
            tip = (bill * 20)/100
        }
        return tip
    }

    return (
        <div className="home">
            <Bill handleBill = {handleBill}/>
            <MyTip handleMyTip = {handleMyTip}/>
            <FriendTip handleFriendTip={handleFriendTip}/>
            <TotalAmount bill={bill} myTip={myTip} friendTip={friendTip}/>
        </div>
    )
}

export default Home