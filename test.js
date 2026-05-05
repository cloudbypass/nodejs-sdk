import cloudbypass, {
    BALANCE_TYPE_DAT,
    BALANCE_TYPE_POINTS,
    BALANCE_TYPE_RES,
    convertBytes,
} from "./index.js";

const APIKEY = "";
const EMAIL = "";

function demoConvertOnly() {
    console.log(convertBytes(1536));
    console.log(convertBytes(1024 ** 3));
    console.log(convertBytes(1024 ** 4 * 2, "G"));
}

async function demoBalance() {
    console.log("points (default):", await cloudbypass.getBalance(APIKEY, EMAIL));
    console.log("points:", await cloudbypass.getBalance(APIKEY, EMAIL, { type: BALANCE_TYPE_POINTS }));

    const res = await cloudbypass.getBalance(APIKEY, EMAIL, { type: BALANCE_TYPE_RES });
    const dat = await cloudbypass.getBalance(APIKEY, EMAIL, { type: BALANCE_TYPE_DAT });
    console.log("res:", res);
    console.log("dat:", dat);

    console.log("res total:", convertBytes(res.total));
    console.log("res balance:", convertBytes(res.balance, "G"));
    console.log("dat total:", convertBytes(dat.total, "G"));
}

demoConvertOnly();

try {
    await demoBalance();
} catch (e) {
    console.error("getBalance:", e.message ?? e);
}
