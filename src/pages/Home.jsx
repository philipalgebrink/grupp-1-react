import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import '../reset.css';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import Form from '../components/Form';
import ActiveCard from '../components/ActiveCard';
import AddCard from '../pages/AddCard';
import SubHeader from '../components/SubHeader';


const Home = () => {
  const [activeCard, setActiveCard] = useState("bitcoin");;
  const [bottomCards, setBottomCards] = useState([
    { vendor: "bitcoin", number: "1234 5678 9101 1123" },
    { vendor: "ninja", number: "1234 5678 9101 1123" },
    { vendor: "block", number: "1234 5678 9101 1123" },
    { vendor: "evil", number: "1234 5678 9101 1123" }
  ]);

  const handleClick = (clickedVendor) => {
    // Hitta index på kortet du klickat på
    const clickedIndex = bottomCards.findIndex(card => card.vendor === clickedVendor);

    // Byt plats på korten med hjälp av index som korten har
    if (clickedIndex !== -1 && clickedIndex !== 0) {
      const newBottomCards = [...bottomCards];
      const clickedCard = newBottomCards[clickedIndex];
      newBottomCards[clickedIndex] = newBottomCards[0];
      newBottomCards[0] = clickedCard;
      setBottomCards(newBottomCards);
      setActiveCard(clickedVendor); // Uppdatera de aktiverade kortet (De nya kortet du klickat på)
    }
  };

  return (
    <div className="App">
      <Header title="E-WALLET" />
      <SubHeader title="ACTIVE CARD" />
      <div className="App">
        {activeCard !== null && (
          <ActiveCard
            vendor={activeCard}
            number="1234 5678 9101 1123"
            handleClick={handleClick}
          />
        )}
        <div className="bottomCards">
          {bottomCards.slice(1).map((card, index) => (
            <Card
              key={index}
              vendor={card.vendor}
              number={card.number}
              handleClick={handleClick}
              active={activeCard === card.vendor}
            />
          ))}
        </div>
      </div>
      <Link to="/addcard">
        <Button title="ADD A NEW CARD" className="home-button" />
      </Link>
    </div>
  );
};

export default Home;