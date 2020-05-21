import HttpError from '../http_error';

export default function(error) {
    
    HttpError.errorHandler(
        error.response.status
    );
    
    return Promise.reject(error);
}
