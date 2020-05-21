import Request from '../../net';

export const login = function(params) {

    return Request.post({
        url: '/ERP/Totallogin',
        body: params
    })
}


export const getPicuuid = function(params) {

    return Request.post({
        url: '/api/getPicuuid',
        body: params,
        service: 'gy'
    })
}