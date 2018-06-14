import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting.js';
import AddTodo from './addTodo.js';
import ShowTodo from './showTodo.js';

class App extends Component {

  constructor() {
      super()
      this.state = {
        count: 0,
        newTodoItem: '',
        todoItems: []
      }
  }

  handleNewToDo = (e) => {
     this.setState({
      newTodoItem: e.target.value //@MEL has tough time with this one
    });
  }

  clearInput = () => {
    this.setState({newTodoItem: ''});
  }

  handleClick = () => {
    let todoList = this.state.todoItems;
    todoList.push(this.state.newTodoItem);
    this.setState({
      todoItems: todoList
    })
    this.clearInput();
  }

  removeTodo = (i) => {
    let todoList = this.state.todoItems;
    todoList.splice(i, 1);
    this.setState({
      todoItems: todoList
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greeting />
        </header>
        <AddTodo 
          addTodo = {this.handleClick} 
          todo = {this.state.newTodoItem} 
          handleChange = {this.handleNewToDo}
        />
        <ShowTodo 
          todos = {this.state.todoItems} 
          removeTodo = {this.removeTodo}
        />
      </div>
    );
  }
}

export default App;
