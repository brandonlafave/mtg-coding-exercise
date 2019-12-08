import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Loader from '../components/Loader';
import fetchData from '../utilities/fetchData';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardList: [],
      isLoading: true
    }
  }

  componentDidMount() {
   fetchData(20, 'name', 'creature')
   .then(response => {
    this.setState({
      cardList: response,
      isLoading: false
    })
   });
  }

  generateCardTiles(cardList) {
    if (Array.isArray(cardList) && cardList.length > 0) {
      return cardList.map((card) => {
        return <Card key={ card.id } { ...card } />
      });
    } else {
      return;
    }
  };

  render() {
    let { cardList, isLoading } = this.state;

    return (
      <div className="home-wrapper">
        <Header />
        <main className='body-content' role='main'>
            <Loader isLoading={isLoading} />
            { this.generateCardTiles(cardList) }
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
