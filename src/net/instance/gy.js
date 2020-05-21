import axios from '../axios';
import HttpConfig from '../config';
import interceptors from '../interceptors/index';

const {requ, requ_error, resp, resp_error} = interceptors;

const GY_INSTANCE = axios.create({
    baseURL: HttpConfig.BASE_URL.gy.prod 
});

// GY_INSTANCE.interceptors.request.use(requ);
// GY_INSTANCE.interceptors.response.use(resp);

// 拦截器设置
axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default GY_INSTANCE;
