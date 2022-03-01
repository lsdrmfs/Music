import { createStore, applyMiddleware, compose } from 'redux'//导入store 导入应用中间件组件

import thunk from 'redux-thunk'                          //导入thunk中间件

import allReducer from './reducer'                         //导入reducer

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //使用tools

// const store = creatStort(allReducer, applyMiddleware(thunk))

const store = createStore(allReducer, composeEnhancers(applyMiddleware(thunk))) //使用tools


export default store 