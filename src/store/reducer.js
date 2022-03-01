import { combineReducers } from 'redux'

import { reducer as recomReducer } from '../pages/cover/store'
import { reducer as playerReducer } from '../pages/bar/store'


//合并reducer
const allReducer = combineReducers({

    recomReducer,
    playerReducer


})

export default allReducer