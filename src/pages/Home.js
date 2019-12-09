import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Loader from '../components/Loader';
import Copy from '../components/Copy';
import fetchData from '../utilities/fetchData';
import _debounce from "lodash.debounce";
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardList: [],
      maximumCardsPerPage: 100,
      cardsFromCurrentPage: 0,
      isLoading: true,
      requestParams: {
        page: 1,
        pageSize: 20,
        type: 'creature',
        orderBy: 'name'
      }
    }

    window.onscroll = () => {
      this.infiniteScrollRequest(
        window.pageYOffset,
        window.innerHeight,
        this.home.offsetHeight
      );
    }
  }

  componentDidMount() {
    this.getCards();
  }

  /**
   * generateCardTiles - Generates the HTML for the card tiles
   * @param {array} cardList An array containing the card values
   * @return {JSX} Returns a list of Card components
   */
  generateCardTiles = (cardList) => {
    if (Array.isArray(cardList) && cardList.length > 0) {
      return cardList.map((card, index) => {
        return <Card key={ `${card.id}-${index}` } { ...card } />
      });
    } else {
      return;
    }
  };

  /**
   * infiniteScrollRequest - Makes an additional API request if the user has reached the bottom of the page
   * @param {array} response An array containing the card values
   * @param {string} pageYOffset The window.pageYOffset value
   * @param {string} innerHeight The window.innerHeight
   * @param {string} homeWrapperOffset The offset values for the home wrapper
   */
  infiniteScrollRequest = (pageYOffset, innerHeight, homeWrapperOffset) => {
    const hasReachedEndOfPage = pageYOffset + innerHeight === homeWrapperOffset && !this.state.isLoading;

    return hasReachedEndOfPage ? this.getCards() : null;
  };

  getCards = () => {
    this.setState({
      isLoading: true
    }, () => {
      fetchData(this.state.requestParams)
      .then(response => {
        this.handleCardResponse(response);
      })
    })
  }

  /**
   * handleCardResponse - Handles the card response
   * @param {array} response An array containing the card values
   */
  handleCardResponse = (response) => {
    let requestParams = this.state.requestParams,
        cardList = this.state.cardList,
        page = requestParams.page;

    if (Array.isArray(response) && response.length > 0) {
      cardList = [ ...cardList, ...response ];
      page += 1;

      requestParams.page = page;
    }

    this.setState({
      requestParams,
      cardList,
      isLoading: false
    })
  };

  render() {
    let { cardList, isLoading } = this.state;
    const title = 'Magic the Gathering Coding Exercise';
    const copy = 'Keep scrolling to load more cards!';

    return (
      <div className="home-wrapper" ref={el => this.home = el}>
        <Header />
        <main className='body-content' role='main'>
          <Copy title={title} copy={copy} />
          <div className='card-tile-container'>
            { this.generateCardTiles(cardList) }
          </div>
          <Loader isLoading={isLoading} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
