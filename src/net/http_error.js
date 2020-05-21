export default class HttpError {
	static errorHandler(code, msg = '出错啦！') {
		if(code === -1) {
			// toast.error(msg);
		}
		
		if(code === 403) {
			// toast.error('登录失效，请重新登录');
			
			if(window.location.origin === "http://localhost:3000") {
				alert('返回403');
			} else {
				window.location.pathname = '/login';
			}
		}
	}
}
