/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 10:36:26
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-19 21:12:13
 * @Desc: 
 */
import React, {lazy,Suspense} from 'react'

import { Switch, Route } from 'react-router-dom'
import routesList from './routes.config'
import lazyLoad from '../utils/lazyLoad'
// import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';


const Soure = lazy(() => import('pages/page2/index'))



const RoutesComp = () => {
    return (
    //  <Suspense fallback={<Loading />}>
         <Switch>
             {/* <Route
                     path='/'
                    //  render={props => <Soure {...props}/>}
                     component={Soure}
                     exact={true}
                 /> */}
         {
             routesList.map(route => (
                 <Route
                     key={route.menuCode}
                     path={route.path}
                     component={lazyLoad(route.loader)}
                     exact={route.exact}
                 />
             ))
         } 
         </Switch>
     
    )
 }
 
// const RoutesComp = () => {
//    return (
//     <Suspense fallback={<Loading />}>
//         <Switch>
//             <Route
//                     path='/'
//                     render={props => <Soure {...props}/>}
                    
//                     exact={true}
//                 />
//         {/* {
//             routesList.map(route => (
//                 <Route
//                     key={route.menuCode}
//                     path={route.path}
//                     component={()=> <Loading/>}
//                     exact={route.exact}
//                 />
//             ))
//         }  */}
//         </Switch>
//     </Suspense>
    
//    )
// }

export default RoutesComp