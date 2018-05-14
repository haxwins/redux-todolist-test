import React, { Component } from 'react';
import AddBar from './AddBar';
import Todolist from './Todolist';
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
       <AddBar />
       <Todolist />
      </div>
    );
  }
}

export default App;
