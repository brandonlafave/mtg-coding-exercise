import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import './Home.css';

class Home extends Component {

  render() {
    const props = {
      image: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409626&type=card',
      name: 'Abattoir Ghoul',
      artist: 'Volkan Baǵa',
      setName: 'Duel Decks: Blessed vs. Cursed',
      type: 'Creature — Zombie'
    };

    return (
      <div className="home-wrapper">
        <Header />
        <div className='body-content'>
          <Card { ...props } />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
