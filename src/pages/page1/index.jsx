/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 10:35:39
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-20 23:16:25
 * @Desc: 
 */
import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd';
import moment from 'moment'
import waitImg from 'assets/images/wait.png'
import {increment, decrement, reset} from '../../store/actions/reduxDemo'
import styles from './index.less'

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

@connect(mapStateToProps,mapDispatchToProps)
export default class Page1 extends React.Component{
    render(){
        const { increment, decrement, reset, counter } = this.props;
        return  (
            <div>
              <div>
                <div> IgnorePlugin: {moment().format('ll')}</div>
              </div>

              <div className={styles['dis_flex']}>
                <div className={styles['flex1']}>css样式前端配置</div>
                <div className={styles['flex1']}>右边de</div>
              </div>

              <div>
                <div> 图片 资源配置</div>
                <img src={waitImg} />
                <div className={styles['bgimg']}>测试背景class背景图片</div>
                <div
                  style={{
                    height: '60px',
                    background: `url(${waitImg}) no-repeat`,
                  }}
                >
                  测试背景style背景图片
                </div>
              </div>


                <div>
                    <div>当前计数为(显示redux计数.....){counter.count}</div>
                    <button
                    onClick={() => {
                        increment();
                        console.log("调用自增函数");
                    }}
                    >
                    自增
                    </button>
                    <button
                    onClick={() => {
                        decrement();
                        console.log("调用自减函数");
                    }}
                    >
                    自减
                    </button>
                    <button
                    onClick={() => {
                        reset();
                        console.log("调用重置函数");
                    }}
                    >
                    重置
                    </button>
                </div>

                <Button type='primary'>你好呀</Button>
            </div>
        )
    }
}
// export default Page1

// const Page1 = props => {
//     console.log(props)
//     return  (
//         <div>
//             <div>
//                 <div>当前计数为(显示redux计数){props.counter.count}</div>
//                 <button
//                 onClick={() => {
//                     props.increment();
//                     console.log("调用自增函数");
//                 }}
//                 >
//                 自增
//                 </button>
//                 <button
//                 onClick={() => {
//                     props.decrement();
//                     console.log("调用自减函数");
//                 }}
//                 >
//                 自减
//                 </button>
//                 <button
//                 onClick={() => {
//                     props.reset();
//                     console.log("调用重置函数");
//                 }}
//                 >
//                 重置
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Page1)