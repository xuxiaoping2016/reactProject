/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-02 15:02:30
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-02 15:02:30
 * @Desc: 
 */
/*
 * @Author: xiaoping.xu
 * @Date: 2021-04-30 15:33:46
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-04-30 17:25:41
 * @Desc: 
 */

 import ani from './dep'

 const init = (target) => {
    target.isTestable = true;
 }

 @init
 class People {
     name: string
     age: number
     constructor(name,age){
         this.name = name
         this.age = age
     }
    
 }

 const arr = new Set()
 arr.add('fd')
 console.log(arr)
 const dom = document.getElementById('app')
 dom.innerHTML ='hello world'
 dom.addEventListener('click', () => {
     const p = new People('xuxi',18)
     console.log('姓名： %s，年龄： %s', p.name, p.age)
 })


 console.log(ani.obj)
 console.log(ani.Animate)