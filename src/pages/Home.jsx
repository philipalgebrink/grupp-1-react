import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Header title="e-wallet" />
      <div className="content">
        {/* Din övriga innehåll för Home komponenten */}
      </div>
      <Link to="/add-card">
        <button>Add a new card</button>
      </Link>
    </div>
  );
}

export default Home;