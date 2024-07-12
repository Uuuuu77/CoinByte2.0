import React from 'react';
import News from './News';
import Performance from './Performance';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to CoinByte</h1>
      <div className="home-content">
        <Performance />
        <News />
      </div>
    </div>
  );
};

export default Home;
