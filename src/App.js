import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'Learn React', isCompleted: true },
      { title: 'Cooking', isCompleted: true },
      { title: 'Watch film', isCompleted: false },
      { title: 'Go to the movies', isCompleted: true }
    ];
  }
  render() {
    return (
      <div className="App">
        {
          this.todoItems.map((item, index) => 
          <TodoItem key={index} item={item}></TodoItem>)
        }
      </div>
    );
  }
  
}

export default App;
