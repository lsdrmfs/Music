import * as actionType from './constant'

const defaultState = {
    banners: [],
    hots: [],
    albums: [],
    rankxs: [],
    rankys: [],
    rankzs: []

}
//接受一个state和一个action,驱动reducer,根据action改变state状态
function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_BANNER:
            return { ...state, banners: action.banners }
        case actionType.CHANGE_HOTRECOM:
            return { ...state, hots: action.hots }
        case actionType.CHANGE_ALBUMRECOM:
            return { ...state, albums: action.albums }
        case actionType.CHANGE_RANKX:
            return { ...state, rankxs: action.rankxs }
        case actionType.CHANGE_RANKY:
            return { ...state, rankys: action.rankys }
        case actionType.CHANGE_RANKZ:
            return { ...state, rankzs: action.rankzs }
        default:
            return state;
    }
}

export default reducer