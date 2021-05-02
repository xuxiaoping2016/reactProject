/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-03 02:03:56
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-03 02:03:57
 * @Desc: 
 */
/*
 * @Author: xiaoping.xu
 * @Date: 2021-04-30 15:33:46
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-03 01:39:11
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
    console.log('module.hot',!!module.hot)
    module.hot.accept(() => {
        console.log('fdfdfdfd')
        const getRouter = require('./router/router').default;
        console.log('getRouter',getRouter)
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        // <AppContainer>
            <Provider {...store}>
                {RootElement}
            </Provider>,
        // </AppContainer>,
        document.getElementById('app')
    )
}

//  if (module.hot) {
//     module.hot.accept();
// }


// const App = () => {
//     return (
//         <Provider {...store}>
//             {getRouter()}
//         </Provider>
//     )
// }
//  ReactDom.render(
//     <App/>,
//      document.getElementById('app')
//  )

