import Request from '../../net';

export const addPalletteMain = function(params) {

    return Request.post({
        url: '/api/addPalletteMain',
        body: params,
        service: 'gy'
    })
}

export const getWeiTiJiaoRecord = function(params) {

    return Request.post({
        url: '/api/getWeiTiJiaoRecord',
        body: params,
        service: 'gy'
    })
}

