
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import {getUsersList} from "../services/UserService.service.js";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '500px',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '30ch',
            },
        },
    },
}));

export default function SearchBar({setSearchUsers}) {

    const [searchData, setSearchData] = useState('')

    const getUsersLists = async (event) => {
        setSearchData(event.target.value)
        const usersList = event.target.value.length > 0 ? await getUsersList(event.target.value) : []
        setSearchUsers(usersList)
    }

    return (

        <Search>
            <SearchIconWrapper>
                <SearchIcon sx={{color:"black"}}/>
            </SearchIconWrapper>
            <StyledInputBase
                value={searchData}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={getUsersLists}
            />
        </Search>
    );
}

Search.prototypes = {
    setSearchUsers: PropTypes.any
}
