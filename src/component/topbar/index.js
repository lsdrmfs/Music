import React, { memo } from 'react'
import { HeaderRecomWrap } from './style'
export default memo(function TopBar(props) {

    const { title, keywords } = props;

    return (
        <HeaderRecomWrap className="sprite_02">

            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keyword">
                    {
                        keywords?.map((item, index) => {
                            return (
                                <div className="item" key={item}>
                                    <a href="/">{item}</a>
                                    <span className="divider">|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="right">
                <a href="https://music.163.com/#/discover/playlist/">更多</a>
                <i className="icon sprite_02"></i>
            </div>

        </HeaderRecomWrap>
    )
})
