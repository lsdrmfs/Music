import React, { memo, Suspense } from 'react'
//路由
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import routes from './router'
//store
import { Provider } from 'react-redux' //共享store
import store from './store/index'     //导入store

//搭建框架
import Header from './component/header'
import Footer from './component/footer'
import Bar from './pages/bar'

export default memo(function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Suspense fallback={<div>loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <Footer />
        <Bar />
      </Provider>
    </BrowserRouter>
  )
})
