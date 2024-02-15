const Bill = ({handleBill}) => {

    return (
        <div>
            <label>How much was your bill ? </label>
            <input type="number" min={1} onChange={(e) => handleBill(Number(e.target.value))} ></input>
        </div>
    )
}

export default Bill