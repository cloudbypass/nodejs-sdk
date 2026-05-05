import axios from "axios";
import {BALANCE_TYPE_POINTS} from "./constants.js";
import {getEnv} from "./utils.js";

const BALANCE_URL = "https://console.cloudbypass.com/api/v1/balance";

/**
 * @param {string} [apikey]
 * @param {string} [email]
 * @param {{ type?: string }} [options]
 * @returns {Promise<Record<string, number>>}
 */
const getBalance = async (apikey, email, options = {}) => {
    const type = options.type ?? BALANCE_TYPE_POINTS;
    const res = await axios.post(
        BALANCE_URL,
        {
            apikey: getEnv("CLOUDBYPASS_APIKEY", "") || getEnv("CB_APIKEY", "") || apikey,
            email,
            type,
        },
        {validateStatus: () => true},
    );
    if (res.status !== 200) {
        const detail = res.data?.detail ?? res.data?.message ?? "Balance API error";
        const err = new Error(typeof detail === "string" ? detail : JSON.stringify(detail));
        err.response = res;
        err.data = res.data;
        throw err;
    }
    return res.data;
};

export {getBalance};
