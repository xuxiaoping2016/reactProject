/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-02 19:42:46
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-06 18:24:06
 * @Desc: 
 */
import { action, computed, observable,makeObservable } from 'mobx'
// import {storeGenerator} from 'src/stores/storeGenerator'

class Store {
    constructor() {
        makeObservable(this)
    }
    @observable name: string = ''

    @observable age: number = 0

    @action setName = (name: string) => {
        console.log(name)
        this.name = name
    }
    @action setAge = (age: number) => this.age = age

    @computed get welcome(){
        return `欢迎来到上海，${this.name},您现在${this.age}啦`
    }
}

// export default {
//     ...storeGenerator<Store>(Store)
// }

export default Store