import "../home.css"

const DecreaseButton = ({decreaseFunction}) => {

    return (
        <button className="button" onClick={decreaseFunction}> - </button>
    )
}

export default DecreaseButton