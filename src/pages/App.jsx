import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import '../reset.css';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import Form from '../components/Form';
import Home from '../pages/Home';
import AddCard from '../pages/AddCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addcard" element={<AddCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
