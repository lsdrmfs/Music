import React from 'react'
import { Redirect } from 'react-router-dom'

import Cover from "../pages/cover";
// import Song from '../pages/song/'
// import Artist from '../pages/artist'
// import Player from '../pages/player'

// const Cover = React.lazy(_ => import("../pages/cover"));
const Rank = React.lazy(_ => import('../pages/rank'));
const Song = React.lazy(_ => import('../pages/song'));
const Artist = React.lazy(_ => import('../pages/artist'));
const Player = React.lazy(_ => import('../pages/player'));


const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/cover" />
        )

    },
    {
        path: "/cover",
        component: Cover,
    },
    {
        path: '/rank',
        component: Rank
    },
    {
        path: '/song',
        component: Song
    }, {
        path: '/artist',
        component: Artist
    },
    {
        path: '/player',
        component: Player
    }

]

export default routes 