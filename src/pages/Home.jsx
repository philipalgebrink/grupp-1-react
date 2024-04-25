import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import '../reset.css';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import Form from '../components/Form';
import AddCard from '../pages/AddCard';

function Home() {
  return (
    <div>
      <Header title="E-WALLET" />
      <div className="App">
      <p className="title">ACTIVE CARD</p>
        <Card vendor="bitcoin" number="1234 5678 9101 1123"/>
        <Card vendor="ninja" number="1234 5678 9101 1123"/>
        <Card vendor="block" number="1234 5678 9101 1123"/>
        <Card vendor="evil" number="1234 5678 9101 1123"/>
      </div>
      <Link to="/addcard">
      <Button title="ADD card"/>
      </Link>
    </div>
  );
}

export default Home;