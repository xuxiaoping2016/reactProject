/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 14:10:39
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-19 14:11:47
 * @Desc: 
 */
import React, { memo } from 'react'

const Header = () => {
    return (
        <div style={{padding: '20px',borderBottom:"1px solid #ddd"}}>
            头部组件
        </div>
    )
}

export default memo(Header)