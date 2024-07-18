import {API_DOMAIN, USER_PATH} from "../constants/routes.js";
import axios from "axios";

export const saveUserDetails = (data) => {
    const url = API_DOMAIN + USER_PATH + "/save";
    axios.post(url, data)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        })
}

export const authenticateUser = async (data) => {

    const url = API_DOMAIN + USER_PATH + "/login"
    console.log(url)
    return await axios.post(url, data)
        .then(response => {
            return response
        })
        .catch(error => {
            return error
        })
}