import {SearchProfileContainer, SearchProfileUsername, SearchProfileWrapper} from "../styles/SearchProfilesStyle.js";
import Avatar from "@mui/material/Avatar";
import {useNavigate} from "react-router-dom";

const SearchProfiles = ({searchUsers}) => {

    const navigate = useNavigate()

    return (
        <SearchProfileContainer>
            {searchUsers.length > 0 && searchUsers.map(
                (user) =>  {
                    return (<SearchProfileWrapper key={user.id} onClick={() => navigate('/profile/' + user.id)}>
                        <Avatar src={user.imageUrl} alt={user.username} sx={{width:'50px', height:'50px', marginRight:'30px'}}></Avatar>
                        <SearchProfileUsername>{user.username}</SearchProfileUsername>
                    </SearchProfileWrapper>)
                }
            )}
        </SearchProfileContainer>
    )
}

export default SearchProfiles