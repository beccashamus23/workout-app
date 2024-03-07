import React from 'react';
import LogIn from './LogIn';
import Goals from './Goals';
import './App.css';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './homepic.png';
import Workouts from './Workouts';

const Home = () => (
  <div>
    <h1 className="title">UPLIFT</h1>
    <img className = "homeImg" src={logo} alt = "logo" />
    <div className='buttonGroup'>
      <button className="customButton">Explore</button>
      <Link to="/Goals">
        <button className="customButton">Goals</button>
      </Link>
      <Link to="/Workouts">
      <button className="customButton">Workouts</button>
      </Link>
    </div>
    <Link to="/LogIn">
      <button className="loginButton">Log In</button>
    </Link>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/Goals" element={<Goals />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Workouts" element={<Workouts />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
