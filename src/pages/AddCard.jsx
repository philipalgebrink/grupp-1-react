import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../components/Header';
import NewCard from '../components/NewCard';
import Form from '../components/Form';
import Button from '../components/Button';
import SubHeader from '../components/SubHeader';

function AddCard() {
  const navigate = useNavigate();

  // Variabler för form
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardVendor, setCardVendor] = useState('');
  const [cardDate, setCardDate] = useState('');

  const handleAddCard = () => {
    console.log('Adding new card...');
    console.log('Card Number:', cardNumber);
    console.log('Card Name:', cardName);
    console.log('Card Vendor:', cardVendor);
    console.log('Card Date:', cardDate);
    if (!cardNumber || !cardName || !cardVendor || !cardDate) {
      alert("All fields must be filled out.");
      return; // Låt inte personen lägga till kort utan full information
    }
    console.log("NAVIGERA SNÄLLA");
    navigate('/', { state: { newCard: { number: cardNumber, name: cardName, vendor: cardVendor, date: cardDate } } }); // Navigera till home
  };

  return (
    <div className="App">
      <Header title="ADD A NEW BANK CARD" />
      <SubHeader title="NEW CARD" />
      <NewCard number={cardNumber} name={cardName} vendor={cardVendor} date={cardDate} />
      <Form
        setCardNumber={setCardNumber}
        setCardName={setCardName}
        setCardVendor={setCardVendor}
        setCardDate={setCardDate}
      />
      <Button title="ADD CARD" className="btn" onClick={handleAddCard} />
    </div>
  );
}

export default AddCard;