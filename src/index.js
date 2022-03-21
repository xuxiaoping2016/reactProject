/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 08:59:07
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-20 23:37:26
 * @Desc: 
 */
import React from 'react'
import ReactDom from 'react-dom'
import moment from 'moment';
import 'moment/locale/zh-cn';
import App from './layout/App'

moment.locale('zh-cn');
ReactDom.render(
    <App/>,
    document.getElementById('app')
)

