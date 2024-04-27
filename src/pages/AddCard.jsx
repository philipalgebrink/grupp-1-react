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
  const [cardCcv, setCardCcv] = useState('');

  const handleAddCard = () => {
    // Ta bort spaces från cardnumber för att underlätta räkning
    const cardNumberWithoutSpaces = cardNumber.replace(/\s/g, '');

    if (!cardNumberWithoutSpaces || cardNumberWithoutSpaces.length !== 16 || !cardName || !cardVendor || !cardDate || !cardCcv || cardCcv.length !== 3) {

      alert("All fields must be filled out.");
      return; // Låt inte personen lägga till kort utan full information
    }
    navigate('/', { state: { newCard: { number: cardNumber, name: cardName, vendor: cardVendor, date: cardDate, ccv: cardCcv } } }); // Navigera till home
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
        setCardCcv={setCardCcv}
      />
      <Button title="ADD CARD" className="btn" onClick={handleAddCard} />
    </div>
  );
}

export default AddCard;