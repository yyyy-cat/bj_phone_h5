import axios from '../axios';
import HttpConfig from '../config';
import interceptors from '../interceptors/index';

const {requ, requ_error, resp, resp_error} = interceptors;

const WX_INSTANCE = axios.create({
    baseURL: HttpConfig.BASE_URL.dk.prod 
});

// WX_INSTANCE.interceptors.request.use(requ, requ_error);
// WX_INSTANCE.interceptors.response.use(resp, resp_error);

// // 拦截器设置
// axios.interceptors.request.use(
//     (config) => {
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// axios.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

export default WX_INSTANCE;
