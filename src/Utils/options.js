import { API_TOKEN } from "./APISecret";
export const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+API_TOKEN
    }
};