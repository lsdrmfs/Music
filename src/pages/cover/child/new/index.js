import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getAlbumRecomAction } from '../../store/action'

import { Carousel } from 'antd'
import { NewWrap } from './style'
import TopBar from '../../../../component/topbar'
import Cover from '../../../../component/cover'
export default memo(function New() {

    //从总的reducer读取数据
    const { album } = useSelector(state => ({
        album: state.recomReducer.albums //()=>()返回的是一个对象,对对象进行解构
    }), shallowEqual)
    //请求数据并发布订阅
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAlbumRecomAction(10))
    }, [dispatch])

    const pageRef = useRef()

    return (
        <NewWrap>
            <TopBar title='新碟上架' />
            <div className="content">
                <button className="arrow arrow-left sprite_02" onClick={e => pageRef.current.prev()} />
                <div className="album">
                    <Carousel ref={pageRef} dots={false}>
                        <div className='page'>
                            {
                                album.slice(0, 5).map((item, index) => {
                                    return <Cover key={item.id} info={item} />
                                })
                            }
                        </div>
                        <div className='page'>
                            {
                                album.slice(5, 10).map((item, index) => {
                                    return <Cover key={item.id} info={item} />
                                })
                            }
                        </div>
                    </Carousel>
                </div>
                <button className="arrow arrow-right sprite_02" onClick={e => pageRef.current.next()} />
            </div>
        </NewWrap>
    )
})
