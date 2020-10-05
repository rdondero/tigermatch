import React from 'react';
import logo from './logo.svg';
import './App.css';
import pton from './img/pton10.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pton} alt="" width="1400" height="787"></img>
        <h1>Welcome to TIGERMATCH!</h1>
        <p>
          Edit "My Profile" to get started!
        </p>
        
      </header>
    </div>
  );
}

export default App;
