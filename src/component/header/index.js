import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'


import { HeaderWrap, HeaderLeft, HeaderRight } from './style'


import { headerLinks } from '../../assets/data/local-data'


export default memo(function Header() {
    const showSelectItem = (item, index) => {
        if (index < 4) {
            return (
                <NavLink to={item.link}>
                    {item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>
            )
        } else {
            return <a href={item.link}>{item.title}</a>
        }
    }
    return (
        <HeaderWrap>
            <div className='content wrap-v1' >
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01">云音乐</a>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div key={item.title} className="select-item">
                                        {showSelectItem(item, index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐" prefix={<SearchOutlined />} />
                    <div className="center">创作者中心</div>
                    <div>登录</div>
                </HeaderRight>
            </div>
            <div className='divider'></div>
        </HeaderWrap>
    )
})


//引入wrap-v1
//引入sprite_01
//select-list