import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CountdownClock from './components/CountdownClock'
import BreakLength from './components/BreakLength'
import SessionLength from './components/SessionLength'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        25 + 5 Clock
      </header>
      <CountdownClock />
      <BreakLength />
      <SessionLength />
    </div>
  );
}

export default App;
