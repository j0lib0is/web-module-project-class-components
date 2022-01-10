import React from 'react';

class TodoForm extends React.Component {
  	constructor() {
		super();
		this.state = {
			input: '',
		}
  	}
	
	handleInput = event => {
		this.setState({
			...this.state,
			input: event.target.value,
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.handleAdd(this.state.input);
		this.setState({
			...this.state,
			input: event.target.reset(),
		});
	}

  	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.handleInput} type='text' name='task'></input>
				<button>Add Todo</button>
				<button onClick={this.props.handleClear}>Clear Completed</button>
			</form>
		);
	}
}

export default TodoForm;