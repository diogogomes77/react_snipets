import Timer from './components/Timer';
import React, { useMemo, useState } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from 'pages/home';
import About from 'pages/about';
import { UserContext } from 'UserContext';

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

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
      <UserContext.Provider value={value}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/timer' element={<Timer />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
