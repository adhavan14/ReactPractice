import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate} from "react-router-dom";
import ChatIcon from '@mui/icons-material/Chat';
import PortraitIcon from '@mui/icons-material/Portrait';
import SearchBar from "./Search.jsx";
import styled from "styled-components";
import PropTypes from "prop-types";
import {useContext} from "react";
import {userContext} from "./UserContextProvider.jsx";

const ProfileContainer = styled.div`
    margin-left: auto;
    display: flex;
    align-content: center;
    height: 40px;
`;
const SearchWrapper = styled.div`
    margin-left: 30%;
`;

const Menu = ({ userId, setSearchUsers, currentUserId }) => {

    const navigate = useNavigate()
    const handleMenu = (path) => {
        navigate(path)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{bgcolor:"#e8a2b9"}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2, color:"black" }}
                        onClick={() => handleMenu("/home/" + currentUserId)}
                    >
                        <HomeIcon/>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2, color:"black" }}
                        onClick={() => handleMenu("/chat")}
                    >
                        <ChatIcon/>
                    </IconButton>
                    <SearchWrapper>
                        <SearchBar setSearchUsers={setSearchUsers}/>
                    </SearchWrapper>
                    <ProfileContainer>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ ml: 2, color:"black" }}
                            onClick={() => handleMenu("/profile/" + userId)}
                        >
                            <PortraitIcon/>
                        </IconButton>
                    </ProfileContainer>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

Menu.prototypes = {
    userId: PropTypes.number,
    setSearchUsers: PropTypes.any
}

export default Menu