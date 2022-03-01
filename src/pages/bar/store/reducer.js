import { CHANGE_PLAYLIST, CHANGE_SONG, CHANGE_SONGINDEX, CHANGE_SEQUENCE, CHANGE_LYRIC, CHANGE_LYRICINDEX } from './constant'

const defaultState = {
    //播放列表
    playList: [],

    songIndex: 0,

    //当前歌曲
    song: [],

    //播放顺序
    sequence: 0,
    //0循环  1随机  2单曲
    lyric: [],
    //当前时间歌词索引
    lyricIndex: 0
}
function reducer(state = defaultState, action) {

    switch (action.type) {
        case CHANGE_SONG:
            return { ...state, song: action.song }
        case CHANGE_PLAYLIST:
            return { ...state, playList: action.playList }
        case CHANGE_SONGINDEX:
            return { ...state, songIndex: action.songIndex }
        case CHANGE_SEQUENCE:
            return { ...state, sequence: action.sequence }
        case CHANGE_LYRIC:
            return { ...state, lyric: action.lyric }
        case CHANGE_LYRICINDEX:
            return { ...state, lyricIndex: action.lyricIndex }
        default:
            return state;
    }
}

export default reducer