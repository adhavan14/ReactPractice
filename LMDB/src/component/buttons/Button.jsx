const Button = ({name, handleClose}) => {

    return (
        <button className="bg-[#1560bd] text-white w-72 rounded-md h-10 hover:bg-indigo-500" onClick={handleClose}>{name}</button>
    )
}

export default Button