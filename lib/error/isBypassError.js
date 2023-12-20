import {isObject} from '../utils.js';

export default function isBypassError(payload) {
    return isObject(payload) && (payload.isBypassError === true);
}
