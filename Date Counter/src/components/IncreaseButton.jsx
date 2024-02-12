import "../home.css"

const IncreaseButton = ({increaseFunction}) => {

    return (
        <button className="button" onClick={increaseFunction}> + </button>
    )
}

export default IncreaseButton