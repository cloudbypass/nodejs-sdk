import cloudbypass, {isBypassError} from "./index.js";

cloudbypass.get("https://ipinfo.io/json",{cb_apikey: "xxx"}).then(res => {
    console.log(res.data);
}).catch(err => {
    console.log(isBypassError(err))
    if (isBypassError(err)) {
        console.log(err.response.data);
    } else {
        console.log(err);
    }
})