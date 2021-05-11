/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-02 15:43:40
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-11 01:12:45
 * @Desc: 
 */
import React, { useState } from 'react'
import Hello from '../../components/hello/Hello'

const Home:React.FC<{}> = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            统计1234：{count}
            <div>
                <button onClick={() => setCount(count+1)}>click +</button>
                <button onClick={() => setCount(count-1)}>click -</button>
            </div>
            <Hello name="xuhdfdsfdfdfdfdf"/>
        </div>
    )
}

export default Home