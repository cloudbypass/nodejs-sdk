import {inherits} from "../utils.js";

function BypassError(axiosError) {
    const {request, response} = axiosError;
    const {id, code, message} = response.data;

    this.name = 'BypassError';
    id && (this.id = id);
    message && (this.message = message);
    code && (this.code = code);
    request && (this.request = request);
    response && (this.response = response);
}

inherits(BypassError, Error, {
    toJSON: function toJSON() {
        return {
            message: this.message, name: this.name, id: this.id, code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});

const prototype = BypassError.prototype;

Object.defineProperty(prototype, 'isBypassError', {value: true});

export default BypassError;