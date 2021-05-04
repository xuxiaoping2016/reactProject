/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-02 16:01:56
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-05 02:35:18
 * @Desc: 
 */

import React,{createRef, useCallback} from 'react'
// import store from './model/store'
import { inject, observer } from 'mobx-react'
import { action, computed, observable,autorun } from 'mobx'


class Store {
    @observable count = 0;
    @computed get result() {
      return this.count + 100;
    }
    @action add () {
      this.count = this.count + 1;
    }
  };
  
  const mstore = new Store();
  
  setInterval(() => {
   mstore.add();
  }, 2000);
  
  autorun(() => {
    console.log(mstore.result);
  });

const Page = (props) => {
   console.log('props',props)
    const nameRef = createRef<HTMLInputElement>()
    const ageRef = createRef<HTMLInputElement>()
    
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
        setAge(Number(ageRef.current.value))
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