import React, { memo } from 'react';

import { PlayerWrap, PlayerLeft, PlayerRight } from './style';

import PlayerInfo from './player-info'

export default memo(function Player() {
    return (
        <PlayerWrap>
            <div className="content bgmPlayer wrap-v2">
                <PlayerLeft>
                    <PlayerInfo></PlayerInfo>
                </PlayerLeft>
                <PlayerRight>
                    {/* <h2>SimiPlaylist</h2> */}
                    {/* <h2>SimiSong</h2> */}
                    {/* <h2>Download</h2> */}
                </PlayerRight>
            </div>
        </PlayerWrap>
    )
})
