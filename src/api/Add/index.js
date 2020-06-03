import Request from '../../net';

export const uploadPic = function(params) {

    return Request.post({
        url: '/api/uploadPic',
        body: params,
        service: 'gy'
    })
}

export const addCustom = function(params) {

    return Request.post({
        url: '/api/addCustom',
        body: params,
        service: 'gy'
    })
}


export const getPicuuid = function(params) {

    return Request.post({
        url: '/api/getPicuuid',
        body: params,
        service: 'gy'
    })
}

export const addAddress = function(params) {

    return Request.post({
        url: '/api/addAddress',
        body: params,
        service: 'gy'
    })
}

export const getAllAddress = function(params) {

    return Request.post({
        url: '/api/getAllAddress',
        body: params,
        service: 'gy'
    })
}

