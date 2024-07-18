import {API_DOMAIN, USER_PATH} from "../constants/routes.js";
import axios from "axios";

export const getUserDetails = async (id) => {
    const url = API_DOMAIN + USER_PATH + "/details/"+ id;
    return await axios.get(url)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        });
}

export const getUsersList = async (username) => {

    const url = API_DOMAIN + USER_PATH + "/list?username=" + username;
    console.log(url)
    return await axios.get(url)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        });
}