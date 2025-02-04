import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	return (
		<div>
			{props.todos.map(item => (
				<Todo item={item} handleToggle={props.handleToggle} key={item.id} />
			))}
		</div>
	);
}

export default TodoList;