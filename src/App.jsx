import React from 'react';
import Header from './components/Header';
import User from './components/User';
import Map from './components/Map';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Body">
        <User />
        <Map className="Map" />
      </div>

    </div>
  );
}

export default App;
