/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-02 16:01:56
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-06 18:40:44
 * @Desc: 
 */

import React,{useRef, useCallback} from 'react'
// import store from './model/store'
import { inject, observer } from 'mobx-react'

const Page = (props) => {
   console.log('props',props)
    const nameRef = useRef<HTMLInputElement>()
    const ageRef = useRef<HTMLInputElement>()
    
    const {
        name,
        age,
        welcome,
        setName,
        setAge
    } = props.pageStore
    
    
    const changeName = ()=>{
        setName(nameRef.current.value)
    }
    const changeAge = useCallback(()=>{
        setAge(Number(ageRef.current.value)|| 0)
    },[])
    return (
        <div>
            <div>fsd</div>
            <div>姓名：{name}</div>
            <div>年龄：{age}</div>
            <div>欢迎语：{welcome}</div>

            <div>
                <input ref={nameRef}/>
                <button onClick={changeName}>修改姓名?</button>
            </div>
            <div>
                <input ref={ageRef}/>
                <button onClick={changeAge}>修改年龄</button>
            </div>
            <div>
            <button onClick={() => setName('fdfdfdddddd')}>修改年龄</button>
            </div>
        </div>
    )
}

export default inject('pageStore')(observer(Page))