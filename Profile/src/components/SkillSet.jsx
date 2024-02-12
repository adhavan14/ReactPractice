import Skill from "./skill"

const skills = [
    {
        skill : "Java",
        level : "Advanced",
        color : "green"
    },
    {
        skill : "MySQL",
        level : "Intermediate",
        color : "#ADD8E6"
    },
    {
        skill : "React",
        level : "Beginner",
        color : "yellow"
    },
    {
        skill : "HTML",
        level : "Beginner",
        color : "red"
    }
];

const SkillSet = () => {

    return (
        
            <div className=" skill-outer-div">
                {
                    skills.map((skill) => {
                        return <Skill name = {skill.skill} color = {skill.color} level = {skill.level} ></Skill>
                    })
                }
            </div>
      
    )
}

export default SkillSet