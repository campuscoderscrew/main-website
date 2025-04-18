import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Home from 'src/pages/home';
import Crew from 'src/pages/crew';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crew" element={<Crew />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);