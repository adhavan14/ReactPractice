import {LoginButton, LoginContainer, LoginInput} from "../styles/LoginStyle.style.js";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {authenticateUser} from "../services/SignUpAndLogin.service.js";
import {SignUpButton} from "../styles/SignUpStyle.style.js";
import UserContextProvider, {userContext} from "../component/UserContextProvider.jsx";

const Login = ()=> {

    const navigate = useNavigate()
    const {setUserData} = useContext(userContext)

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    const handleInput = (event) => {
        const {name, value} = event.target
        setLoginData((prevData) => ({...prevData, [name] : value}))
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const data = {
            "username" : loginData.username,
            "password" : loginData.password
        }
        const response = await authenticateUser(data)

        console.log(response.status)
        console.log(response.data)
        if (response.status === 200)
            setUserData({
                id: response.data,
                username: loginData.username
            })
            navigate("/home/" + response.data )
    }

    return (
        <UserContextProvider>
            <LoginContainer>
                <h2>Login</h2>
                <LoginInput type="text"
                            placeholder="username"
                            name="username"
                            value={loginData.username}
                            onChange={handleInput}>

                </LoginInput>
                <LoginInput type="password"
                            placeholder="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleInput}>
                </LoginInput>
                <LoginButton onClick={handleLogin}>Login</LoginButton>
                <SignUpButton onClick={() => {navigate("/signUp")}}>SignUp</SignUpButton>
            </LoginContainer>
        </UserContextProvider>
    )
}

export default Login