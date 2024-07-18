import {useContext, useEffect, useState} from "react";
import {getUserDetails} from "../services/UserService.service.js";
import Avatar from '@mui/material/Avatar';
import {
    FollowerCountWrapper, FollowingCountWrapper,
    PostCountWrapper, ProfileButtonWrapper, ProfileContainer,
    ProfileContentAndImageWrapper, ProfileContentWrapper,
    ProfileCountWrapper, ProfileUsernameAndContent,
    UserContainer, UsernameAndAvatarWrapper, UserNameWrapper,
} from "../styles/User.style.js";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import Menu from "../component/Menu.jsx";
import {Button} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from "@mui/material/IconButton";
import {userContext} from "../component/UserContextProvider.jsx";

const Profile = () => {

    const [userinfo, setUserInfo] = useState({})
    const {userData} = useContext(userContext)
    const {userId} = useParams()
    const getUserDetail = async () => {
        const response = await getUserDetails(userId)
        setUserInfo(response)
    };
    console.log(userData.id)
    useEffect(() => {
        getUserDetail()
    }, []);

    console.log(userData.id, parseInt(userId))
    return (
        <ProfileContainer>
            <Menu userId={userId} currentUserId={userData.id}></Menu>
            <UserContainer>
                <ProfileContentAndImageWrapper>
                    <UsernameAndAvatarWrapper>
                        <UserNameWrapper>
                            {userinfo.username && userinfo.username.toUpperCase()}
                        </UserNameWrapper>
                        <Avatar alt={userinfo.username} src={userinfo.imageUrl}
                                sx={{width: 100, height: 100}}></Avatar>
                    </UsernameAndAvatarWrapper>
                    <ProfileUsernameAndContent>
                        <ProfileContentWrapper>
                            <ProfileCountWrapper>
                                <PostCountWrapper>
                                    <text>10</text>
                                    <text>posts</text>
                                </PostCountWrapper>
                                <FollowerCountWrapper>
                                    <text>10</text>
                                    <text>follower</text>
                                </FollowerCountWrapper>
                                <FollowingCountWrapper>
                                    <text>10</text>
                                    <text>following</text>
                                </FollowingCountWrapper>
                            </ProfileCountWrapper>
                        </ProfileContentWrapper>
                        {userData.id === parseInt(userId) && <ProfileButtonWrapper>
                            <Button style={{
                                backgroundColor: "#DB7093",
                                color: "white",
                                borderRadius: "10px",
                                width: "130px",
                                height: "30px",
                                fontSize: "12px"
                            }}>edit profile</Button>
                            <Button style={{
                                backgroundColor: "#DB7093",
                                color: "white",
                                borderRadius: "10px",
                                width: "100px",
                                height: "30px",
                                fontSize: "12px"
                            }}>post</Button>
                            <IconButton
                                sx={{mr: 2, color: "black"}}
                            >
                                <MoreHorizIcon></MoreHorizIcon>
                            </IconButton>
                        </ProfileButtonWrapper>
                        }
                        {userData.id !== parseInt(userId) && <ProfileButtonWrapper>
                            <Button style={{
                                backgroundColor: "#DB7093",
                                color: "white",
                                borderRadius: "10px",
                                width: "100px",
                                height: "30px",
                                fontSize: "12px"
                            }}>follow</Button>
                            <Button style={{
                                backgroundColor: "#DB7093",
                                color: "white",
                                borderRadius: "10px",
                                width: "100px",
                                height: "30px",
                                fontSize: "12px"
                            }}>message</Button>
                            <IconButton
                                sx={{mr: 2, color: "black"}}
                            >
                                <MoreHorizIcon></MoreHorizIcon>
                            </IconButton>
                        </ProfileButtonWrapper>
                        }
                    </ProfileUsernameAndContent>
                </ProfileContentAndImageWrapper>
            </UserContainer>
        </ProfileContainer>
    )
}

Profile.propTypes = {
    username: PropTypes.string
}
export default Profile