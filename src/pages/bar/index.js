import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
//路由
import { NavLink } from 'react-router-dom'

//Action
import { getSongAction, changeSequenceAction, changeCutMusicAction, changeLyricIndexAction } from './store/action'
//UI库
import { Slider, message } from 'antd';
//CSS组件
import { BarWrap, Control, PlayInfo, Operator } from './style'
//数据处理工具
import { getSizeImage, formatDate, getPlaySong } from '../../assets/tool/format'

export default memo(function Bar() {
    //props & stata
    const [time, setTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [ischange, setIschange] = useState(false)
    const [isplay, setIsplay] = useState(false)
    const [isPanel, setIsPanel] = useState(false)


    const { song, sequence, lyric, lyricIndex, playList } = useSelector(state => ({
        song: state.playerReducer.song,
        sequence: state.playerReducer.sequence,
        lyric: state.playerReducer.lyric,
        lyricIndex: state.playerReducer.lyricIndex,
        playList: state.playerReducer.playList
    }), shallowEqual)




    const audioRef = useRef()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSongAction(31134451))
    }, [dispatch]);
    useEffect(() => {
        audioRef.current.src = getPlaySong(song.id)

        audioRef.current.play().then(res => {
            setIsplay(true);
        }).catch(err => {
            setIsplay(false);
        });
    }, [song]);


    // 处理数据song
    const picUrl = (song.al && song.al.picUrl) || "";
    const singer = (song.ar && song.ar[0].name) || "";
    const duration = song.dt || 0;
    const showDuration = formatDate(duration, "mm:ss");
    const showTime = formatDate(time, "mm:ss");



    const changeSequence = () => {
        let currentSequence = sequence + 1
        if (currentSequence > 2) {
            currentSequence = 0
        }
        dispatch(changeSequenceAction(currentSequence))
        console.log(currentSequence)
    }

    // 处理函数
    const playMusic = () => {
        isplay ? audioRef.current.pause() : audioRef.current.play()
        setIsplay(!isplay)
    }
    const timeUpdate = (e) => {
        const currentPlayTime = e.target.currentTime
        if (!ischange) {
            setProgress(time / duration * 100)
            setTime(currentPlayTime * 1000)
        }

        // 获取当前时间的歌词
        let lrcIndex = 0
        for (let i = 0; i < lyric.length; i++) {
            let lrcItem = lyric[i];
            if (currentPlayTime * 1000 < lrcItem.time) {
                lrcIndex = i - 1
                break;
            }
        }
        if (lyricIndex !== lrcIndex) {
            dispatch(changeLyricIndexAction(lrcIndex))
            console.log(lyric[lrcIndex])

            message.open({
                className: 'lyricBar',
                content: lyric[lrcIndex].content,
                key: 'lyric',
                duration: 0,


            })


        }
    }


    // 向组件内部传送callback
    const changeTime = useCallback((v) => {
        setIschange(true)
        setProgress(v)
        setTime(v / 100 * duration)
    }, [duration])
    const afterChange = useCallback((v) => {
        audioRef.current.currentTime = v / 100 * duration / 1000
        setTime(v / 100 * duration)
        setIschange(false)
    }, [duration])
    // 依赖引用的duration发生改变,callback需要重新定义
    //切歌模块
    const cutMusic = (tag) => {
        dispatch(changeCutMusicAction(tag))
    }
    const timeEnd = (e) => {
        if (sequence === 2) {//单曲循环,把当前歌曲时间设为0
            e.target.currentTime = 0;
            audioRef.current.play();

            console.log(e)
        }
        else {
            dispatch(changeCutMusicAction(1))
        }
    }

    const changeIsPanel = () => {
        setIsPanel(!isPanel)
    }

    return (
        <BarWrap className='sprite_player' >
            <div className='content wrap-v2'>
                <Control isplay={isplay}>
                    <button className='prev sprite_player' onClick={e => cutMusic(-1)}></button>
                    <button className='play sprite_player' onClick={e => playMusic()} ></button>
                    <button className='next sprite_player' onClick={e => cutMusic(1)} ></button>
                </Control>
                <PlayInfo>
                    <div className='image'>
                        <NavLink to='/player'>
                            <img
                                src={getSizeImage(picUrl, 35)}
                                alt='img'></img>
                        </NavLink>

                    </div>
                    <div className='info'>
                        <div className='song'>
                            <span>{song?.name}</span>
                            <a href='#/' className='singer'>{singer}</a>
                        </div>

                        <div className='progress'>
                            <Slider value={progress} onChange={changeTime} onAfterChange={afterChange} />
                            <div className='time'>
                                <span className='now-time'>{showTime}</span>
                                <span className='divider'>/</span>
                                <span className='all-time'>{showDuration}</span>
                            </div>

                        </div>
                    </div>
                </PlayInfo>
                <Operator sequence={sequence} >
                    {/* <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div> */}
                    <div className="right sprite_player">
                        {/* <button className="sprite_player btn volume"></button> */}
                        <button className="sprite_player btn loop" onClick={changeSequence}></button>
                        <button className="sprite_player btn playlist" onClick={e => changeIsPanel()} ></button>
                    </div>

                </Operator>
                <audio ref={audioRef}
                    onTimeUpdate={e => timeUpdate(e)}
                    onEnded={e => timeEnd(e)} />
            </div>
            { isPanel && <div className="list">
                {playList.map((item, index) => {
                    return (<div className='list-item' key={item.id}>
                        <div className='list-item-index' >{index + 1}</div>
                        <div className='list-item-item' >{item.name}</div>
                    </div>
                    )

                })}
            </div>}


        </BarWrap>
    )
}) 
