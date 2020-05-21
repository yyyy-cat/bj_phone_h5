import Utils from '../../utils/index';
import Global from '../../utils/global'

export default function(config) {
    
    let {data, url, method} = config;
    let customID = Global.get('customID');
    let params = new URLSearchParams();
    
    data.customID = customID;
    data = Utils.filterRequestBody(data);
    
    if(customID && method === 'post') {
	    url += url.includes('?') ? `&customID=${customID}` : `?customID=${customID}`;
    }
    
    if(method === 'get') {
        url = Utils.createParamsByObject(url, data);
    }
    
    return Object.assign(config, {
        url,
        data
    });
}
