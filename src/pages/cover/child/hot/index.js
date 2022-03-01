import React, { memo, useEffect } from 'react'
//, useRef, useCallback, useState 
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotRecomAction } from '../../store/action'

import { HotRecomWrap } from './style'

import TopBar from '../../../../component/topbar'

import Card from '../../../../component/card'

export default memo(function HotRecom() {
    //从总的reducer读取数据
    const { hot } = useSelector(state => ({
        hot: state.recomReducer.hots
    }), shallowEqual)
    //请求数据并发布订阅
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHotRecomAction(8))
    }, [dispatch])


    return (
        <HotRecomWrap>
            <TopBar title='热门推荐' keywords={['华语', '流行', '民谣', '摇滚']} />
            <div className="recom-list">
                {
                    hot.map((item, index) => {
                        return <Card key={item.id} info={item} />
                    })
                }
            </div>

        </HotRecomWrap >
    )
})
