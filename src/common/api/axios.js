import axios from "axios";
export const keyAPI = '1ece0538146a06f8a979372231363c95';
export default axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    // Content-Type:'application/json;charset=utf-8'
})
