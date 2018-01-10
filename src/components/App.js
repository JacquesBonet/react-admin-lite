import React, { Component } from 'react';
import Users from '../connectors/Users';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1>crud Users</h1>
        </div>
        <p className="app-intro">
          Add users
        </p>
        <Users/>
      </div>
    );
  }
}

export default App;
