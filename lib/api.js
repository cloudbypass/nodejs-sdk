import axios from "axios";
import {getEnv} from "./utils.js";

const getBalance = async (apikey) => {
    return axios.get('https://console.cloudbypass.com/api/v1/balance?apikey=' + getEnv("CB_APIKEY", apikey))
        .then(res => {
            return res.data?.balance || -1;
        })
}

export {
    getBalance
};