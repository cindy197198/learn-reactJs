import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import Calculator from './components/Calculator';
import tick from './img/tick.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount() {
    this.inputElement.current.focus()
  }

  render() {
      return (
        <div className="App">
          <input type="text" ref={this.inputElement} />
        </div>
      );
  }
}

export default App;
