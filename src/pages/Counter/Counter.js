import React, {Component} from 'react';
import {increment, decrement, reset} from 'actions/counter';

import {connect} from 'react-redux';

import styles from './style.less'

import img from '../../images/wait.png'

class Counter extends Component {
    render() {
        return (
            <div>
                <div className={styles['a']}>当前计数为{this.props.counter.count}</div>
                <div className='b'>红色字体</div>
                <button onClick={() => this.props.increment()}>自增
                </button>
                <button onClick={() => this.props.decrement()}>自减
                </button>
                <button onClick={() => this.props.reset()}>重置
                </button>
                <div>
                    <img src="/imgs/images/wait.png"/>
                    <img src={img} />
                    <div className={styles['bg']}>背景图片!!!!!</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);