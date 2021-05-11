/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-07 23:00:29
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-07 23:05:36
 * @Desc: 
 */
import React from 'react'
import classNames from 'classnames'
import './index.less'
interface Prop {
    name:string
    className?: string
    style?: React.CSSProperties
    onClick? : Function
    onClickCapture? : Function
}
const icon:React.FC<Prop> = (props) => <i
    className={classNames('iconfont', props.name, props.className)}
    style={props.style}
    onClick={() => props.onClick && props.onClick()}/>
export default icon