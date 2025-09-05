import axios from "axios";
const api = axios.create({
    baseURL: "http://10.110.12.21:3000", // só o host e porta
    timeout:2000
})
export default api;