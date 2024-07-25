import { NavLink } from "react-router-dom"
import Logo from '../assets/destination.png';
import { LogoContainer, LogoTitle, LogoWrapper } from "./layout/Home.style"
import { PageNavContainer } from "./PageNav.style";

const PageNav = () => {

    return (
        <PageNavContainer>
            <NavLink to="/" style={{textDecoration:'none'}}>
                <LogoContainer>
                    <LogoWrapper src={Logo} alt="Trip logo"></LogoWrapper>
                    <LogoTitle>Trip Planner</LogoTitle>
                </LogoContainer>
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/login">Login</NavLink>
        </PageNavContainer>
    )
}

export default PageNav