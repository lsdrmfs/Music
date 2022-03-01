import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import TopBar from '../../../../component/topbar'

import { TopWrap } from './style';

import { getRankRecomAction } from '../../store/action'

import Ranking from '../../../../component/ranking'

export default memo(function Top() {

    const { rankxs, rankys, rankzs } = useSelector(state => ({
        rankxs: state.recomReducer.rankxs,
        rankys: state.recomReducer.rankys,
        rankzs: state.recomReducer.rankzs

    }), shallowEqual)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRankRecomAction(0))
        dispatch(getRankRecomAction(2))
        dispatch(getRankRecomAction(3))
    }, [dispatch]);

    return (
        <TopWrap>
            <TopBar title="榜单" />
            <div className="tops bgmRank">
                <Ranking info={rankxs} />
                <Ranking info={rankys} />
                <Ranking info={rankzs} />
            </div>
        </TopWrap>
    )
})