import React, { memo } from 'react';

// import RankTop from "./child/rank-top";

import {
  RankWrap,
  RankLeft,
  RankRight,
} from "./style";

export default memo(function Rank() {

  return (
    <RankWrap className="wrap-v2">
      <RankLeft>
        {/* <RankTop /> */}
        <h2>Left</h2>
      </RankLeft>
      <RankRight>
        {/* <RankHeader />
        <RankList /> */}
        <h2>Right</h2>
      </RankRight>
    </RankWrap>
  )
})
