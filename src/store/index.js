/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 21:54:13
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-20 09:53:26
 * @Desc: 
 */
import { createStore } from "redux"; 
import reducers from './reducer'
export default createStore(reducers)