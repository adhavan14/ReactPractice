const Skill = ({name, color, level}) => {

    let emoji = "💪"
    
    if (level == "Beginner" ){
        emoji = "👶"
    } else if (level == "Intermediate") {
        emoji = "👍"
    }
    return (
        <div style={{backgroundColor : color, height : 20}}>
            <h4>{name} {emoji} </h4>
        </div>
    )
}

export default Skill