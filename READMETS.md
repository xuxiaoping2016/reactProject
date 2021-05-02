<!--
 * @Author: xiaoping.xu
 * @Date: 2021-05-02 17:25:25
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-02 17:42:18
 * @Desc: 
-->
# tsconfig - compilerOptions配置项说明


## noImplicitAny
类型： boolean
默认值： false
描述：在表达式和声明上有隐含的 any类型时报错
当 "noImplicitAny": true 时，以下代码会报错
```js
 const computeCate = cate => {
     console.log(cate)
 }
```
报错：Parameter 'cate' implicitly has an 'any' type.ts(7006)
解决方案：
1、将noImplicitAny设置为false
2、给cate明确赋予一个类型，或显示的设置为any类型

### 注意
noImplicitAny 设置为true时，react-dom会报错

Could not find a declaration file for module 'react-dom'. '/Users/xuxiaoping/work/github/reactProject/node_modules/react-dom/index.js' implicitly has an 'any' type.
  Try `npm install @types/react-dom` if it exists or add a new declaration (.d.ts) file containing `declare module 'react-dom';`ts(7016)


## noImplicitReturns
类型： boolean
默认值： false
描述：不是函数的所有返回路径都有返回值时报错。
当 "noImplicitAny": true 时，以下代码会报错
```js
 const computeCate = (cate: number) => {
     if(cate == 1){
         return 'hello'
     }
 }
```
报错：Not all code paths return a value.ts(7030)
解决方案：
1、将noImplicitReturns设置为false
2、让函数在任何情况下都有返回值
```js
const computeCate = (cate: number) => {
     if(cate == 1){
         return 'hello'
     }
     return null
 }
```