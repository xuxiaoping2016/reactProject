/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 21:55:38
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-19 22:04:28
 * @Desc: 
 */
export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const RESET = "counter/RESET";


export function increment(){
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return { type: DECREMENT };
}
  
export function reset() {
return { type: RESET };
}
  