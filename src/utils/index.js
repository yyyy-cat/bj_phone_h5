const NULL_TYPE_NAME = '[object Null]';
const UNDEFINED_TYPE_NAME = '[object Undefined]';
const OBJECT_TYPE_NAME = '[object Object]';
export default class Utils {

    static getValueType(value) {
		return Object.prototype.toString.call(value);
	}
	
	static filterRequestBody(data = {}) {
		for (let key in data) {
			let v_name = this.getValueType(data[key]);
			
			if(v_name === NULL_TYPE_NAME || v_name === UNDEFINED_TYPE_NAME) {
				delete data[key];
				
				continue;
			}
			
			if(v_name === OBJECT_TYPE_NAME) {
				this.filterRequestBody(data[key]);
			}
		}
		
		return data;
	}
    static createParamsByObject(url, params = {}) {
		let str = '';
		params = this.filterRequestBody(params);
		
		for (let key in params) {
			str = str + `&${key}=${params[key]}`;
		}
		
		if(str) {
			url = url.includes('?') ? url + str : url + '?' + str.substring(1);
		}
		
		return url;
	}
}