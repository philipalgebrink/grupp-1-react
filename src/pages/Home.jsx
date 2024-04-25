import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header title="E-WALLET" />
      <Link to="/add-card">
        <button>Add a new card</button>
      </Link>
    </div>
  );
}

export default Home;