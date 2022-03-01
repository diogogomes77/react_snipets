import Timer from './components/Timer';
import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Index from 'pages';
import About from 'pages/about';

function App() {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/timer'>Timer example</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<About />} />
        <Route path='/timer' element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;
