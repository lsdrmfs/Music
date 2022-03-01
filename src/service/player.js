import request from './request'


export function getSong(ids) {
    return request({
        url: "/song/detail",
        params: {
            ids
        }
    })
}

export function getLyric(id) {
    return request({
        url: "/lyric",
        params: {
            id
        }
    })
}