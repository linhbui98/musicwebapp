import React from 'react';
import SignIn from './views/signIn/SignIn';
import Player from './views/player/player';
import './App.css';

function App() {
  return (
    <div className="App">
      <div><Player></Player></div>
      <div><SignIn></SignIn></div>
    </div>
  );
}

export default App;
