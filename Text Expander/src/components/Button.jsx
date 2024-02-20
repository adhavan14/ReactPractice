const Button = ({name, color}) => {

    return (
        <button style={{color:color, background:"none", padding:0, border:"none"}}>{name}</button>
    )
}

export default Button