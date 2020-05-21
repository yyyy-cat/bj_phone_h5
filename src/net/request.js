import instance from './instance/index';

export default class Request {
    
    static default_service = 'wx';
    static default_data = {};
    
    static get({url, service = this.default_service, params = this.default_data}) {
        return new Promise((resolve, reject) => {
			instance[service].get(url, {
				data: params
			}).then(res => {
				let {status} = res;

				if(status === 200) {
					resolve(res);
				} else {
				    reject(res);
                }
            }).catch(e => {
				for (let key in e) {
					console.log(key + ' ====> ' + e[key]);
				}
			});
        });
    }
    
    static post({url, service = this.default_service, body = this.default_data }) {
		
		return new Promise((resolve, reject) => {

			instance[service].post(url, body).then(res => {
				let {status} = res;

				if(status === 200) {
					resolve(res);
				} else {
				    reject(res);
                }
			}).catch(e => {
				for (let key in e) {
					console.log(key + ' ====> ' + e[key]);
				}
			});
		});
    }
}
