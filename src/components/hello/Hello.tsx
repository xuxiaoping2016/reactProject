/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-02 16:21:06
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-02 18:23:29
 * @Desc: 
 */
/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-02 15:43:40
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-02 16:02:37
 * @Desc: 
 */
import React from 'react'

interface IProps{
    name: string
}
const Hello : React.FC<IProps> = props => {

    return (
        <div>
           欢迎您：{props.name}
        </div>
    )
}

export default Hello