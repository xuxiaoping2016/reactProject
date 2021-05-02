/*
 * @Author: xiaoping.xu
 * @Date: 2021-04-30 17:17:54
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-04-30 17:22:05
 * @Desc: 
 */


 const xiushi = target => {
     target.cate = '动物'
 }

 @xiushi
 class Animate {
     name: string
     age: number
     constructor(name, age){
         this.name = name
         this.age = age
     }
 }


 const obj = new Animate('猫',2)

 export default {obj, Animate}

