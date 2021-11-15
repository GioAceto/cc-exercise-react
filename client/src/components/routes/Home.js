import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/styles.scss';
import NavBar from '../NavBar';
import Hero from '../Hero';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <section className='content-section'>
        <header>
          <h2>Let the Celebration Begin.</h2>
        </header>
        <main className='main-content'>

        </main>
      </section>
    </div>
  )
};

export default Home