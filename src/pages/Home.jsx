import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';
import '../reset.css';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import ActiveCard from '../components/ActiveCard';
import SubHeader from '../components/SubHeader';
import NewCard from '../components/NewCard';


const Home = () => {
  const [activeCardId, setActiveCardId] = useState(1);

  const [bottomCards, setBottomCards] = useState([
    { id: 1, vendor: "bitcoin", number: "0101 1101 1110 0011", name: "Philip Älgebrink", date: "01/27" },
    { id: 2, vendor: "ninja", number: "5555 5555 5555 5555", name: "Ann Heijkenskjöld", date: "02/24" },
    { id: 3, vendor: "block", number: "7777 7777 7777 7777", name: "Baran Bulduk", date: "04/28" },
    { id: 4, vendor: "evil", number: "0999 0999 0999 0999", name: "Emma Dybdorf", date: "05/26" }
  ]);

  const [newCard, setNewCard] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.newCard) {
      const newCardData = location.state.newCard;

      setNewCard(newCardData);
    }
  }, [location]);

  useEffect(() => {
    if (newCard) {
      setBottomCards(prevCards => [...prevCards, newCard]);
      setNewCard(null);
    }
  }, [newCard]);

  const handleClick = (clickedId) => {
    if (clickedId !== activeCardId) {
      const clickedIndex = bottomCards.findIndex(card => card.id === clickedId);
      const activeIndex = bottomCards.findIndex(card => card.id === activeCardId);
      if (clickedIndex !== -1 && activeIndex !== -1) {
        const newBottomCards = [...bottomCards];
        // Byt plats på korten
        [newBottomCards[clickedIndex], newBottomCards[activeIndex]] = [newBottomCards[activeIndex], newBottomCards[clickedIndex]];
        setBottomCards(newBottomCards);
        setActiveCardId(clickedId);
      }
    }
  };

  return (
    <div className="App">
      <Header title="E-WALLET" />
      <SubHeader title="ACTIVE CARD" />
      <div className="App">
        {activeCardId !== null && (
          <ActiveCard
            vendor={bottomCards.find(card => card.id === activeCardId)?.vendor || ""}
            number={bottomCards.find(card => card.id === activeCardId)?.number || ""}
            name={bottomCards.find(card => card.id === activeCardId)?.name || ""}
            date={bottomCards.find(card => card.id === activeCardId)?.date || ""}
            handleClick={() => handleClick(activeCardId)}
          />
        )}
        <div className="bottomCards">
          {bottomCards
            .filter(card => card.id !== activeCardId) // Ta bort aktiva kortet (så de inte blir duplicering)
            .map((card, index) => (
              <Card
                key={index}
                id={card.id}
                vendor={card.vendor}
                number={card.number}
                name={card.name}
                date={card.date}
                handleClick={() => handleClick(card.id)}
                active={activeCardId === card.id}
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