import { getSong, getLyric } from '../../../service/player'
import { CHANGE_LYRIC, CHANGE_PLAYLIST, CHANGE_SEQUENCE, CHANGE_SONG, CHANGE_SONGINDEX, CHANGE_LYRICINDEX } from './constant'
import { getRandomNumber } from '../../../assets/tool/math';
import { parseLyric } from '../../../assets/tool/lyric' //正则解析歌词工具

//保存更改数据
const changeSongAction = (song) => ({
    type: CHANGE_SONG,
    song
})

const changePlayListAction = (playList) => ({
    type: CHANGE_PLAYLIST,
    playList
})

const changeSongIndexAction = (songIndex) => ({
    type: CHANGE_SONGINDEX,
    songIndex
})

export const changeSequenceAction = (sequence) => ({
    type: CHANGE_SEQUENCE,
    sequence
})

export const changeLyricAction = (lyric) => ({
    type: CHANGE_LYRIC,
    lyric
})
export const changeLyricIndexAction = (lyricIndex) => ({
    type: CHANGE_LYRICINDEX,
    lyricIndex
})


//Control模块,切歌
export const changeCutMusicAction = (tag) => {
    return (dispatch, getState) => {
        const sequence = getState().playerReducer.sequence
        let songIndex = getState().playerReducer.songIndex
        const playList = getState().playerReducer.playList

        switch (sequence) {
            case 1:
                let randomIndex = getRandomNumber(playList.length);
                while (randomIndex === songIndex) {
                    randomIndex = getRandomNumber(playList.length);
                }
                songIndex = randomIndex;
                break;
            default:
                songIndex += tag;
                if (songIndex >= playList.length) songIndex = 0;
                if (songIndex < 0) songIndex = playList.length - 1;
        }
        const song = playList[songIndex];
        dispatch(changeSongIndexAction(songIndex));

        dispatch(changeSongAction(song));

        //切歌请求歌词数据
        dispatch(getLyricAction(song.id))
    }
}


//请求数据
export const getSongAction = (idx) => {
    return (dispatch, getState) => {

        const playList = getState().playerReducer.playList
        const songIndex = playList.findIndex(song => song.id === idx)

        if (songIndex !== -1) {
            //通过请求的idx在播放列表中找到歌曲,
            dispatch(changeSongIndexAction(songIndex))
            //更改当前歌曲为播放列表中的歌曲
            const song = playList[songIndex]
            //更改
            dispatch(changeSongAction(song))
            //请求歌词

            dispatch(getLyricAction(song.id))


        } else {//没有在播放列表中找到,则请求网络数据

            getSong(idx).then((res) => {
                //获取idx歌曲数据
                const song = res.songs && res.songs[0]
                //未获取到
                if (!song) return
                //将获取到的新song添加到歌单
                const newList = [...playList, song]
                //更新reducer数据
                dispatch(changePlayListAction(newList))
                dispatch(changeSongIndexAction(newList.length - 1))
                dispatch(changeSongAction(song))

                //请求歌词
                dispatch(getLyricAction(song.id))

            })
        }
    }
}

export const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            const lyric = parseLyric(res.lrc.lyric)
            dispatch(changeLyricAction(lyric))
        })

    }


}