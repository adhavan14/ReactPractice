import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const userContext = createContext();

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({children}) => {

    const [userData, setUserData] = useState(
        {
            id:0,
            username:""
        }
    )

    return (
        <userContext.Provider value={{userData, setUserData}}>
            {children}
        </userContext.Provider>
    )
};

UserContextProvider.prototypes = {
    children : PropTypes.any
}

export default UserContextProvider
