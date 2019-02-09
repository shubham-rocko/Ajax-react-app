import axios from 'axios';

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common['Autherization'] = "Auth Token from instance";
// instance.interceptors.request...
export default instance