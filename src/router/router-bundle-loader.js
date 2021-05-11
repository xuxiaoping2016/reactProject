/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-02 15:48:59
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-10 17:02:30
 * @Desc: 
 */
import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Components from '@/components/index'
import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/page1/Page';
import ResoucePage from 'bundle-loader?lazy&name=counter!pages/resourcePage/index'
const { Bundle, Loading } = Components

const createComponent = (Com) => (props) => (
    <Bundle load={Com}>
        {
            (Comp) =>{
                console.log('Com', Comp)
                return  Comp ? <div>fdf</div> : <Loading/>
            }
        }
    </Bundle>
);

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/resource">Page1</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={createComponent(Home)}/>
                <Route path="/page1" component={createComponent(Page1)}/>
                <Route path="/resource" component={createComponent(ResoucePage)} />
            </Switch>
        </div>
    </Router>
);

export default getRouter;