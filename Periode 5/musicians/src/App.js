import React, { Component } from 'react';
import './App.css';
import MusiciansPresenter from'./components/musicians_presenter';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <MusiciansPresenter />
      </div>
    );
  }
}

export default App;
