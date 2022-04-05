/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-26 18:32:28
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-26 18:47:42
 * @Desc: 
 */
import React, {Component} from 'react'

class LifeCycles extends Component {
    state ={
        a:1,
        b:2
    }
    // static getDerivedStateFromProps(props,state){
    //     console.log(props,state)
    //     return props
    // }

    getSnapshotBeforeUpdate(a,b){
        console.log(a,b)
    }

    componentWillMount(){
        console.log('componentWillMount')
    }
    render(){
        return <div>
            生命周期
            {
                Object.keys(this.state).map(item => (
                    <div key={item}>{item}: {this.state[item]}</div>
                ))
            }
        </div>
    }
}

export default LifeCycles