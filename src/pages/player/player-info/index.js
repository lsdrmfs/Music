import React, { memo, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { getSizeImage } from '../../../assets/tool/format';

import {
  InfoWrap,
  InfoLeft,
  InfoRight
} from './style';

export default memo(function PlayerInfo() {
  // props and hooks
  const [isSpread, setIsSpread] = useState(false);

  // redux hooks
  const { currentSong, currentLyrics } = useSelector(state => ({
    currentSong: state.playerReducer.song,
    currentLyrics: state.playerReducer.lyric,
  }), shallowEqual);

  // handle code
  const totalLyricCount = isSpread ? currentLyrics.length : 13;

  return (
    <InfoWrap>
      <InfoLeft>
        <div className="image">
          <img src={getSizeImage(currentSong.al.picUrl, 130)} alt="" />
          <span className="cover image_cover"></span>
        </div>

      </InfoLeft>
      <InfoRight isSpread={isSpread}>
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title">{currentSong.name}</h3>
        </div>
        <div className="singer">
          <span className="label">歌手：</span>
          <a href="/#" className="name">{currentSong.ar[0].name}</a>
        </div>
        <div className="album">
          <span className="label">所属专辑：</span>
          <a href="/#" className="name">{currentSong.al.name}</a>
        </div>

        <div className="lyric">
          <div className="lyric-info">
            {
              currentLyrics.slice(0, totalLyricCount).map((item, index) => {
                return <p key={item.time} className="text">{item.content}</p>
              })
            }
          </div>
          <button className="lyric-control"
            onClick={e => setIsSpread(!isSpread)}>
            {isSpread ? "收起" : "展开"}
            <i className="sprite_icon2"></i>
          </button>
        </div>
      </InfoRight>
    </InfoWrap>
  )
})
