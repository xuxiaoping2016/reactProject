/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-02 20:31:49
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-02 20:33:27
 * @Desc: 
 */
// /*
//  * @Author: xiaoping.xu
//  * @Date: 2021-05-02 20:31:49
//  * @LastEditors: xiaoping.xu
//  * @LastEditTime: 2021-05-02 20:31:57
//  * @Desc: 
//  */

// import React,{createRef, useCallback} from 'react'
// import store from './model/store'
// import { observer } from 'mobx-react'

// const Page = () => {
//     const nameRef = createRef<HTMLInputElement>()
//     const ageRef = createRef<HTMLInputElement>()

//     const {
//         name,
//         age,
//         welcome,
//         setName,
//         setAge
//     } = store.useStore()
    
//     const changeName = useCallback(()=>{
//         setName(nameRef.current.value)
//     },[])
//     const changeAge = useCallback(()=>{
//         setAge(Number(ageRef.current.value))
//     },[])
//     return (
//         <div>
//             <div>fdsfdf</div>
//             <div>姓名：{name}</div>
//             <div>年龄：{age}</div>
//             <div>欢迎语：{welcome}</div>

//             <div>
//                 <input ref={nameRef}/>
//                 <button onClick={changeName}>修改姓名</button>
//             </div>
//             <div>
//                 <input ref={ageRef}/>
//                 <button onClick={changeAge}>修改年龄</button>
//             </div>
//             <div>
//             <button onClick={() => setName('fdfdfdddddd')}>修改年龄</button>
//             </div>
//         </div>
//     )
// }

// export default observer(Page)