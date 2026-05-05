import cloudbypass from "./lib/cloudbypass.js";

const {
    getBalance,
    isBypassError,
    create,
} = cloudbypass;

export {BALANCE_TYPE_DAT, BALANCE_TYPE_POINTS, BALANCE_TYPE_RES} from "./lib/constants.js";
export {convertBytes} from "./lib/utils.js";

export {
    cloudbypass as default,
    getBalance,
    isBypassError,
    create,
};
