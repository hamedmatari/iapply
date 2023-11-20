import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: process.env.REACT_APP_URL
    baseURL: 'https://iapply.ialphaw.online:8880/api/'
});

export default axiosInstance;
