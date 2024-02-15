const FriendTip = ({handleFriendTip}) => {

    return (
        <div>
            <label>How did your friend like your service ? </label>
            <select onChange={handleFriendTip}>
                <option>{"Dissatified (0%)"}</option>
                <option>{"It was okay (5%)"}</option>
                <option>{"It was good (10%)"}</option>
                <option>{"Absolutely amazing (20%)"}</option>
            </select>
        </div>
    )
}

export default FriendTip