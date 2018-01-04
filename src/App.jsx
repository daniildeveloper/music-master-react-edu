import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppTitle">Music Master</div>
        <div>
          <input type="text" placeholder="search an artist"/>
          <button>Button</button>
        </div>

        <div className="Profile">
          <div>Artist Name</div>
          <div>Artist Picture</div>
        </div>

        <div className="Gallery">
          Gallery
        </div>
      </div>
    );
  }
}

export default App;
