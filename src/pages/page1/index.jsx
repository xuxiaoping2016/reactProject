/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 10:35:39
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-19 23:47:40
 * @Desc: 
 */
import React from 'react'
import { connect } from 'react-redux'
import {increment, decrement, reset} from '../../store/actions/reduxDemo'


const mapStateToProps = (state, ownprops) => {
    return {
      counter: state.counter,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      increment: () => {
        dispatch(increment());
      },
      decrement: () => {
        dispatch(decrement());
      },
      reset: () => {
        dispatch(reset());
      },
    };
    // return bindActionCreators({
    //   increment,decrement,reset
    // },dispatch)
  };


const Page1 = props => {
    console.log(props)
    return  (
        <div>
            <div>
                <div>当前计数为(显示redux计数){props.counter.count}</div>
                <button
                onClick={() => {
                    props.increment();
                    console.log("调用自增函数");
                }}
                >
                自增
                </button>
                <button
                onClick={() => {
                    props.decrement();
                    console.log("调用自减函数");
                }}
                >
                自减
                </button>
                <button
                onClick={() => {
                    props.reset();
                    console.log("调用重置函数");
                }}
                >
                重置
                </button>
            </div>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Page1)