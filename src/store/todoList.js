import { obervable, action, observable } from 'mobx';

class TodoList {
    @observable todos =[];

    @action push = () => {
        console.log('ffff',this, this.todos)
        this.todos.push({
            label:"端午节"
        })
    }
}

export default new TodoList()