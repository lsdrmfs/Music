import request from './request'


export function getBanner() {
    return request({
        url: '/banner'
    })
}

export function getHotRecom(limit) {
    return request({
        url: "/personalized",
        params: {
            limit
        }
    })
}

export function getAlbumRecom(limit) {
    return request({
        url: "/top/album",
        params: {
            limit
        }
    })
}

export function getRankRecom(idx) {
    return request({
        url: "/top/list",
        params: {
            idx
        }
    })
}