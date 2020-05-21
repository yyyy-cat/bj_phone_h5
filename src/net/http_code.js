export default class HttpCode {
    
    // 网络错误
    static NETWORK_ERROR = -1001;
    
    // 网络连接超时
    static NETWORL_TIMEOUT = -1002;
    
    // 服务器返回普通报错
    static SERVICE_ERROR = -1003;
    
    // 服务器返回403报错
    static SERVICE_403_ERROR = -1004;
	
	// 404
	static NOT_FOUND = -1005;
    
    // 未知错误
    static UNKONWN_ERROR = -1006;
    
    // 成功
    static SUCCESS = 200;
    
    /**
     * 处理报错信息
     * @param code 状态码
     * @param message 提示信息
     * @param noTip 没有提示?
     */
    static errorHandlerFunction({code, message, noTip}) {
        if(noTip) {
            return message;
        }
        
        // TODO 处理错误
    }
}
