import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from '../components/Header';
import NewCard from '../components/NewCard';
import Form from '../components/Form';
import Button from '../components/Button';
import SubHeader from '../components/SubHeader';
import Home from './Home';

function AddCard() {
  return (
    <div className="App">
      <Header title="ADD A NEW BANK CARD" />
      <SubHeader title="NEW CARD" />
      <NewCard />
      <Form />
      <Link to="/">  
        <Button title="ADD CARD" />
      </Link>
    </div>
  );
}

export default AddCard;
