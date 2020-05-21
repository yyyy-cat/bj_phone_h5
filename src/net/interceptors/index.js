import requestInterceptors from './request';
import requestErrorInterceptors from './request_error';
import responseInterceptors from './response';
import responseErrorInterceptors from './response_error';

export default {
    requ: requestInterceptors,
    requ_error: requestErrorInterceptors,
    resp: responseInterceptors,
    resp_error: responseErrorInterceptors
}
