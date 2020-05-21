export default class HttpConfig {
    
    // 超时时间
    static TIME_OUT = 30000;
    
    // 返回数据类型
    static RESPONSE_TYPE = 'json';
    
    // post content-type
    static POST_CONTENT_TYPE = 'application/json';
    
    // form表单 content-type
    static FORM_CONTENT_TYPE = 'application/x-www-form-urlencoded';
    
    // baseURL
    static BASE_URL = {
        dk: {
            prod: 'http://120.78.186.60:8085'
            // prod: 'http://192.168.5.103:8080'
        },
        gy: {
            prod: 'http://120.78.186.60:8094'
        }
    };
}
