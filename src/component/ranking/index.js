import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { getSizeImage } from '../../assets/tool/format';
import { RankingWrap } from './style';

import { getSongAction } from '../../pages/bar/store'

export default memo(function Ranking(props) {
  // props and state
  const { info } = props;
  const { tracks = [] } = info;


  //处理导入的getSongAction,使用redux,hooks
  const dispatch = useDispatch()
  //点击触发播放动作
  const playMusic = (item) => {
    dispatch(getSongAction(item.id))
  }

  return (
    <RankingWrap>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a href="/" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play" onClick={e => playMusic(item)} ></button>
                    {/* <button className="btn sprite_icon2 addto"></button> */}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

    </RankingWrap>
  )
})
