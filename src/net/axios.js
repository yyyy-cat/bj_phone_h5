import axios from 'axios';
import HttpConfig from './config';
// import moment from 'moment';

// 全局配置
axios.defaults.timeout = HttpConfig.TIME_OUT;
axios.defaults.headers.post['Content-Type'] = HttpConfig.POST_CONTENT_TYPE;
axios.defaults.responseType = HttpConfig.RESPONSE_TYPE;
// axios.defaults.headers.send_time = moment().millisecond();

export default axios;
