import * as actionType from './constant'

import { getBanner, getHotRecom, getAlbumRecom, getRankRecom } from '../../../service/recom'

//     Banner     Action      
//返回Action对象,由下方触发
const changeBannerAction = (res) => ({
    type: actionType.CHANGE_BANNER,
    banners: res.banners
})

//          Thunk           
//请求数据中间件,被hook勾走触发
export const getBannerAction = () => {
    return dispatch => {
        getBanner().then((res) => {
            dispatch(changeBannerAction(res))
        })
    }
}
//Hot
const changeHotRecomAction = (res) => ({
    type: actionType.CHANGE_HOTRECOM,
    hots: res.result
})

export const getHotRecomAction = (limit) => {
    return dispatch => {
        getHotRecom(limit).then((res) => {
            dispatch(changeHotRecomAction(res))
        })
    }
}
//AlbumRecom
const changeAlbumRecomAction = (res) => ({
    type: actionType.CHANGE_ALBUMRECOM,
    albums: res.albums
})

export const getAlbumRecomAction = (limit) => {
    return dispatch => {
        getAlbumRecom(limit).then((res) => {
            dispatch(changeAlbumRecomAction(res))
        })
    }
}

//RankRecom
const changeRankxAction = (res) => ({
    type: actionType.CHANGE_RANKX,
    rankxs: res.playlist
})
const changeRankyAction = (res) => ({
    type: actionType.CHANGE_RANKY,
    rankys: res.playlist
})

const changeRankzAction = (res) => ({
    type: actionType.CHANGE_RANKZ,
    rankzs: res.playlist
})

export const getRankRecomAction = (idx) => {
    return dispatch => {
        getRankRecom(idx).then((res) => {
            switch (idx) {
                case 0:
                    dispatch(changeRankxAction(res))

                    break;
                case 2:
                    dispatch(changeRankyAction(res))

                    break;
                case 3:
                    dispatch(changeRankzAction(res))

                    break;

                default:
                    break;
            }
        })
    }
}


