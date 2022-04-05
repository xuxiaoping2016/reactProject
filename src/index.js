/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 08:59:07
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-21 17:18:26
 * @Desc: 
 */
import React from 'react'
import ReactDom from 'react-dom'
import moment from 'moment';
import 'moment/locale/zh-cn';
import App from './layout/App'

moment.locale('zh-cn');

if(module.hot){
    console.log('配置人更新了')
    module.hot.accept()
}
ReactDom.render(
    <App/>,
    document.getElementById('app')
)

