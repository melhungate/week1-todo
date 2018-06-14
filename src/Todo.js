import React, { Component } from 'react';
import PropTypes from 'prop-types';

//The below could be a sta;teless component. See FeaturedDonut.js


const Todo = (props) => {
	const {description, removeTodo, index} = props;
    return (
          <li key={description}>
            {description}
            <button onClick={() => removeTodo(index)}>Remove Todo</button>
          </li>
	)
};

Todo.propTypes = {
  description: PropTypes.string.isRequired //@MEL whats the points of this? 
};

export default Todo;