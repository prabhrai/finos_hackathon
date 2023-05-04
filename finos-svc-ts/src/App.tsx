import React from 'react';
import logo from './logo.svg';
import './App.css';
import FinosConnector from './FinosConnector'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Connector Service
        </p>
        <FinosConnector/>
      </header>
      
    </div>
  );
}

export default App;
