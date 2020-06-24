import React, {Component} from 'react';
import { observer } from 'mobx-react';

@observer
export default class Todos extends Component {
  
    render() {
      console.log(this.props.todoList.todos.length)
      return (
        <div>
          <div>todoList的lenth是{this.props.todoList.todos.length}</div>
         <button onClick={this.props.todoList.push}>点我添</button>
        </div>
      )
    }
}