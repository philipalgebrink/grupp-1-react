import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from '../components/Header';
import NewCard from '../components/NewCard';
import Form from '../components/Form';
import Button from '../components/Button';
import SubHeader from '../components/SubHeader';

function AddCard() {
  // Variabler för form
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardVendor, setCardVendor] = useState('');
  const [cardDate, setCardDate] = useState('');


  return (
    <div className="App">
      <Header title="ADD A NEW BANK CARD" />
      <SubHeader title="NEW CARD" />
      {/* Render the NewCard component with state variables */}
      <NewCard number={cardNumber} name={cardName} vendor={cardVendor} date={cardDate} />
      {/* Render the Form component and pass state setters as props */}
      <Form
        setCardNumber={setCardNumber}
        setCardName={setCardName}
        setCardVendor={setCardVendor}
        setCardDate={setCardDate}
      />
      {/* Render the Button component */}
      <Link to="/">
        <Button title="ADD CARD" />
      </Link>
    </div>
  );
}

export default AddCard;