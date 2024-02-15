const MyTip = ({handleMyTip}) => {

    return (
        <div>
            <label>How did you like the service ? </label>
            <select onChange={handleMyTip}>
                <option>{"Dissatified (0%)"}</option>
                <option>{"It was okay (5%)"}</option>
                <option>{"It was good (10%)"}</option>
                <option>{"Absolutely amazing (20%)"}</option>
            </select>
        </div>
    )
}

export default MyTip