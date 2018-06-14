import React, { Component } from 'react';
import Todo from './Todo.js';

//The below could be a stateless component. See FeaturedDonut.js


const ShowTodo = (props) => {
	const {todos, removeTodo} = props;
    return (
          <ul>
            {todos.map((item, i) => (
            	<Todo 
            		description = {item}
            		removeTodo = {removeTodo}
            		index = {i}
            		key = {i}
            	/>
            ))}
          </ul>
	)
}

export default ShowTodo;