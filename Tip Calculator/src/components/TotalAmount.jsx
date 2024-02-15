const TotalAmount = ({bill, myTip, friendTip}) => {

    const totalTip = myTip + friendTip
    return (
        <div>
            You pay {bill + totalTip + " ( " + bill + " + " + totalTip + " )"} 
        </div>
    )
}

export default TotalAmount