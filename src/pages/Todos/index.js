import React, {Component} from 'react';
import List from 'pages/Todos/List'
// import todoStore from 'store/todoList'


export default class Todos extends Component {
    render() {
     return (
       <List todoList={{todos:[]}}/>
     )
    }
}