import React, { memo } from 'react';

import { getSizeImage } from '../../assets/tool/format';

import { CoverWarp } from './style';

export default memo(function Cover(props) {
    const { info, size = 100, width = 118, bgp = "-570px" } = props;

    return (
        <CoverWarp size={size} width={width} bgp={bgp}>
            <div className="album-image">
                <img src={getSizeImage(info.picUrl, size)} alt="" />
                <a href="/" className="cover image_cover">{info.name}</a>
            </div>
            <div className="album-info">
                <div className="name text-nowrap">{info.name}</div>
                <div className="artist text-nowrap">{info.artist.name}</div>
            </div>
        </CoverWarp>
    )
})
