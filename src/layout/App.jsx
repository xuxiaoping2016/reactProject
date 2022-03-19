/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 10:12:40
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-19 23:42:26
 * @Desc: 
 */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/index'
import  BasicPageLayout from './layout/index'
import RoutesComp from '../router/router'

const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <BasicPageLayout><RoutesComp/></BasicPageLayout>
            </Provider>
        </Router>
    )
}

export default App