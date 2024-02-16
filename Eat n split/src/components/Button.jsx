const Button = ({handleButtonFuntion, buttonName}) => {

    return (
        <div className="mr-4">
            <button className="bg-orange-400 w-20 rounded-lg text-sm p-1" onClick={handleButtonFuntion}>
                {buttonName}
            </button>
        </div>
    )
}

export default Button