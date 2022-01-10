import React from 'react';

const Todo = props => {
	const handleComplete = () => {
		props.handleToggle(props.item);
	}

	return (
		<div onClick={handleComplete} className={`${props.item.completed ? 'completed' : ''}`}>
			<p>{props.item.task}</p>
		</div>
	);
}

export default Todo;