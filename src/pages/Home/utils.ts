/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-02 17:06:28
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-02 17:46:16
 * @Desc: 
 */

 const name: string = 'xuxiaoping'

 const displayName = () => {
     console.log(name)
 }

 const computeCate = (cate: number) => {
     if(cate == 1){
         return 'hello'
     }
     return null
 }

 export {
     displayName,
     computeCate
 }