import {useNavigate, useParams} from "react-router-dom";
import Menu from "../component/Menu.jsx";
import SearchProfiles from "../component/SearchProfiles.jsx";
import {useState} from "react";

const Home = () => {
    const navigate = useNavigate();
    const { userId } = useParams()
    const [searchUsers,setSearchUsers] = useState([])
    const handleNavigation = (path) => {
        navigate(path);
    }

    return (
        <>
            <div>Home</div>
            <Menu userId = {userId} setSearchUsers={setSearchUsers}></Menu>
            <SearchProfiles searchUsers={searchUsers}></SearchProfiles>
        </>
    )
}

export default Home