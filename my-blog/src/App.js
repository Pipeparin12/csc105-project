import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './Login/Login';

function App() {
  return (
    <Login>
      <Home/>
    </Login>
  );
}

export default App;
