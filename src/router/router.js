/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-02 15:48:59
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-10 17:07:58
 * @Desc: 
 */

import React, {  Suspense, lazy } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { Loading } from '@/components/index'
// const { Bundle, Loading } = Components

const Home = lazy(() => import('pages/Home/Home'));
const Page1 = lazy(() => import('pages/Page1/Page'));
const ResoucePage = lazy(() => import('pages/resourcePage/index'));

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/resource">ResoucePage</Link></li>
            </ul>
            <Suspense fallback={<div>Loading . . . </div>}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/page1" component={Page1}/>
                    <Route path="/resource" component={ResoucePage}/>
                </Switch>
            </Suspense>
        </div>
    </Router>
);

export default getRouter;