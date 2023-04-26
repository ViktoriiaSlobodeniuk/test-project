import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Home from '../pages/Home';
const Tweets = lazy(() => import('../pages/Tweets'));

const App = () => {
  return (
    <>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
