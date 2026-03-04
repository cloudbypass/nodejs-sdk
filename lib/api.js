import axios from "axios";
import {getEnv} from "./utils.js";

const getBalance = async (apikey, email) => {
    return axios.get('https://console.cloudbypass.com/api/v1/balance', {
        params: {
            apikey: getEnv("CLOUDBYPASS_APIKEY", "") || getEnv("CB_APIKEY", "") || apikey,
            email
        }
    })
        .then(res => {
            return res.data?.balance;
        })
}

export {
    getBalance
};