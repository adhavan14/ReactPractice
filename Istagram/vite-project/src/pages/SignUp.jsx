import { SignUpButton, SignUpContainer, SignUpInput } from "../styles/SignUpStyle.style"
import { saveUserDetails } from "../services/SignUpAndLogin.service.js";
import {useNavigate} from "react-router-dom";
import {useState} from "react";



const SignUp = () => {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setUserData((prevData) => ({
            ...prevData, [name]:value
        }))
    }

    const handleSignUp = ()=> {
        console.log("called")
        const data = {
            "username" : userData.username,
            "email" : userData.email,
            "password" : userData.password
        };
        console.log(data)
        saveUserDetails(data)

        navigate("/")
    }

    return (

        <SignUpContainer>
            <h2>Sign Up</h2>
            <SignUpInput type="text"
                         placeholder="username"
                         name="username"
                         value={userData.username}
                         onChange={handleInputChange}>

            </SignUpInput>
            <SignUpInput type="email"
                         placeholder="email"
                         name="email"
                         value={userData.email}
                         onChange={handleInputChange}>

            </SignUpInput>
            <SignUpInput type="password"
                         placeholder="password"
                         name="password"
                         value={userData.password}
                         onChange={handleInputChange}>

            </SignUpInput>
            <SignUpButton onClick={handleSignUp}>Sign Up</SignUpButton>
        </SignUpContainer>

)
}

export default SignUp