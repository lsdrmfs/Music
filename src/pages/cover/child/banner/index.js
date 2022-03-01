import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getBannerAction } from '../../store/action'

import { Carousel } from 'antd';
import {
    BannerWrap,
    BannerCenter,
    BannerControl
} from './style'

export default memo(function Banner() {

    const [bgNow, setbgNow] = useState(1)

    //  只有两个需求,组件和redux的关联,所以用到react-redux
    //1.获取reducer里的数据 
    const { banner } = useSelector(state => ({
        banner: state.recomReducer.banners
    }), shallowEqual)//浅拷贝比较,true的话不渲染,flase的哈重新渲染

    //ref Hook
    const bannerRef = useRef()


    const dispatch = useDispatch()
    //2.dispatch Action 发送网络请求
    useEffect(() => {

        dispatch(getBannerAction())

    }, [dispatch]);//放的依赖都是会导致组件重新渲染的东西

    const bgChange = useCallback((from, to) => {
        setbgNow(to)
    }, [])


    const bgImage = (banner[bgNow]?.imageUrl) + '?imageView&blur=40x20'

    return (
        <BannerWrap bgImage={bgImage}>
            <div className='banner wrap-v2'>
                <BannerCenter>
                    <Carousel effect="fade" autoplay="true" ref={bannerRef} beforeChange={bgChange} >
                        {
                            banner.map((item, index) => {
                                return <div className='banner-item'
                                    key={item.targetId} >
                                    <img className='image' src={item.imageUrl} alt={item.typeTitle}></img>
                                </div>
                            })
                        }
                    </Carousel>
                </BannerCenter>
                <BannerControl>
                    <button className='btn left bgmBtn' onClick={e => bannerRef.current.prev()} />
                    <button className='btn right bgmBtn' onClick={e => bannerRef.current.next()} />
                </BannerControl>
            </div>
        </BannerWrap>
    )
})
