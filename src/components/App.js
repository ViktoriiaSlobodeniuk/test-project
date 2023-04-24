import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { NavLink } from 'react-router-dom';

import Home from '../pages/Home';
const Tweets = lazy(() => import('../pages/Tweets'));

const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tweets"></NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Routes>
    </>
  );
};

export default App;
