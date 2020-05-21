import HttpError from "../http_error";

export default function(response) {
    
    let {code, msg} = response.data;
    
    if(code !== 0) {
		HttpError.errorHandler(code, msg);
    }
	
	return response.data;
}
