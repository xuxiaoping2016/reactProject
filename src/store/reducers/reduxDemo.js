/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 22:05:04
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-19 22:08:01
 * @Desc: 
 */
import { INCREMENT, DECREMENT, RESET} from '../actions/reduxDemo'


const initState = {
    count: 0,
  };

export default function reducer(state = initState,action){
    switch (action.type) {
        case INCREMENT:
          console.log(state);
          return {
            count: state.count + 2,
          };
        case DECREMENT:
          return {
            count: state.count - 2,
          };
        case RESET:
          return { count: 0 };
        default:
          return state;
      }
}