import React, { Component } from 'react';

//The below could be a stateless component. See FeaturedDonut.js
const AddTodo = (props) => {
	const {addTodo, todo, handleChange} = props;
    return (
    	<div className="App-intro">
    		<input value={todo} onChange={handleChange} />
    		<button onClick={addTodo}>Submit</button>
    	</div>
	)
}

export default AddTodo;