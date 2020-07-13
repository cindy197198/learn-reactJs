import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: 'Learn React', isCompleted: true },
        { title: 'Cooking', isCompleted: true },
        { title: 'Watch film', isCompleted: false },
        { title: 'Go to the movies', isCompleted: true }
      ]
    }
  }
  onItemClick() {
  
  }
  render() {
      return (
        <div className="App">
          {
            this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) => 
            <TodoItem key={index} item={item} onClick={this.onItemClick}></TodoItem>)
          }
          {this.state.todoItems.length === 0 && 'Nothing here!'}
        </div>
      );
  }
  
}

export default App;
