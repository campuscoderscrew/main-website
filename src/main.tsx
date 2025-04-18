import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Crew from 'src/pages/Crew';
import Home from './pages/Home';
import Requests from './pages/Requests'

import './app.css';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/requests" element={<Requests/>}/>
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);