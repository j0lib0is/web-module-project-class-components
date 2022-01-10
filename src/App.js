import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
  {name: 'take out garbage', id: 1234},
  {name: 'do the dishes', id: 1235}
];

class App extends React.Component {
  // ✅ You will need a place to store your state in this component.
  // ✅ Design `App` to be the parent component of your application.
  // ✅ This component is going to take care of state, and any change handlers you need to work with your state.
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  handleAdd = () => {
    // add new tasks to task list
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
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
