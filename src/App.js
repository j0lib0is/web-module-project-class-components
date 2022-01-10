import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // ✅ You will need a place to store your state in this component.
  // ✅ Design `App` to be the parent component of your application.
  // ✅ This component is going to take care of state, and any change handlers you need to work with your state.
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  handleAdd = (inputValue) => {
    const newTask = {
      task: inputValue,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTask]
    })
  };

  handleToggle = () => {
    // toggle task completion
  };

  handleClear = () => {
    // clear completed tasks
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
