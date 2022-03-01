import React, { memo } from 'react'


import { CoverWrap, Content, RecomLeft, RecomRight } from './style'
import Banner from './child/banner'
import Hot from './child/hot'
import Album from './child/new'
import Ranks from './child/top'
import Login from './child/login'

export default memo(function Cover() {


    return (
        <CoverWrap>
            <Banner />
            <Content className="wrap-v2">
                <RecomLeft>
                    <Hot />
                    <Album />
                    <Ranks />
                </RecomLeft>

                <RecomRight>
                    <Login />
                </RecomRight>
            </Content>
        </CoverWrap>
    )
})
