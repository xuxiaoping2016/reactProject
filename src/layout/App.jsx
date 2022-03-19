/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 10:12:40
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-19 17:52:56
 * @Desc: 
 */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import  BasicPageLayout from './layout/index'
import RoutesComp from '../router/router'
const App = () => {
    return (
        <Router>
            <BasicPageLayout><RoutesComp/></BasicPageLayout>
        </Router>
    )
}

export default App