import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import Calculator from './components/Calculator';
import tick from './img/tick.svg';


class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        { title: 'Learn React', isCompleted: true },
        { title: 'Cooking', isCompleted: true },
        { title: 'Watch film', isCompleted: false },
        { title: 'Go to the movies', isCompleted: true }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onItemClick(item) {
    return ( (event) => {
      const isComplete = item.isCompleted;
      const todoItems = this.state.todoItems;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems:[
          ...todoItems.slice(0, index),
          {
            ...item,
            isCompleted: !isComplete
          },
          ...todoItems.slice(index+1)
        ]
      });
    }
    );
  }

  onKeyUp(event) {
    let text = event.target.value;
    if (event.keyCode === 13) { //phim Enter
      text = text.trim();
      if (!text) { return; }
      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isCompleted: false },
          ...this.state.todoItems
        ]
      });
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }
  render() {
    const {todoItems, newItem} = this.state;
      return (
        <div className="App">
          <div className="header">
            <img src={tick} width={32} height={32} />
            <input type="text" placeholder="Add a new item"
                value={newItem}
                onChange={this.onChange}
                onKeyUp={this.onKeyUp}
            />

          </div>
          {
            todoItems.length && todoItems.map((item, index) =>
            <TodoItem key={index} item={item} onClick={this.onItemClick(item)}></TodoItem>)
          }
        </div>
      );
  }
}

export default App;
