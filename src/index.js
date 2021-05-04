/*
 * @Author: xiaoping.xu
 * @Date: 2021-04-30 15:33:46
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-05 02:22:44
 * @Desc: 
 */

import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'mobx-react'
import store from 'src/stores'
import getRouter from './router/router'


/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
   module.hot.accept(() => {
       const getRouter = require('./router/router').default;
       renderWithHotReload(getRouter());
   });
}

function renderWithHotReload(RootElement) {
    console.log(store)
   ReactDom.render(
      //  <AppContainer>
           <Provider {...store}>
               {RootElement}
           </Provider>,
       // </AppContainer>,
       document.getElementById('app')
   )
}