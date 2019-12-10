import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Loader from '../components/Loader';
import Copy from '../components/Copy';
import SearchBar from '../components/SearchBar';
import fetchData from '../utilities/fetchData';
import safeDefaults from '../utilities/safeDefaults';
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
        orderBy: 'name',
        searchQuery: ''
      },
      prevRequestParams: {
        searchQuery: '',
        orderBy: '',
      },
      error: ''
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
    this.getCards(this.state.requestParams);
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
    /*
      TODO: Investigate which offset distance provides the most perceived performance for users.
      Also, look into using a debounce with this function.
    */
    const hasReachedEndOfPage = pageYOffset + innerHeight >= (homeWrapperOffset - 250) && !this.state.isLoading;

    return hasReachedEndOfPage ? this.getCards(this.state.requestParams) : null;
  };

  hasSameRequestParams = (currentRequestParams, prevRequestParams) => {
    return (currentRequestParams.searchQuery === prevRequestParams.searchQuery
      && currentRequestParams.orderBy === prevRequestParams.orderBy);
  }

  /**
   * getCards - Fetches cards from API
   * @param {object} requestParams An object containing the request params:
   *  - page
   *  - pageSize
   *  - type
   *  - orderBy
   *  - searchQuery
   */
  getCards = (requestParams) => {
    let hasReturnedAllResults = this.state.hasReturnedAllResults;

    const hasSameRequestParams = this.hasSameRequestParams(
      requestParams, this.state.prevRequestParams
    );

    if (hasSameRequestParams && hasReturnedAllResults) {
      return;
    }

    if (!hasSameRequestParams && hasReturnedAllResults) {
      hasReturnedAllResults = false;
    }

    this.setState({
      hasReturnedAllResults,
      error: '',
      isLoading: true
    }, () => {
      fetchData(requestParams)
      .then(response => {
        this.handleCardResponse(response);
      })
      .catch(error => {
        this.state({
          error: safeDefaults(error.description, "We're unable to process your request")
        });
      });
    });
  }

  /**
   * handleCardResponse - Handles the card response
   * @param {array} response An array containing the card values
   */
  handleCardResponse = (response) => {
    let requestParams = this.state.requestParams,
        prevRequestParams = this.state.prevRequestParams,
        cardList = this.state.cardList,
        page = requestParams.page,
        isResponseAnArray = Array.isArray(response),
        hasReturnedAllResults = this.state.hasReturnedAllResults;

    if (isResponseAnArray && response.length > 0) {
      cardList = [ ...cardList, ...response ];
      page += 1;

      requestParams.page = page;
      prevRequestParams.searchQuery = requestParams.searchQuery;
      prevRequestParams.orderBy = requestParams.orderBy;
    }

    if (isResponseAnArray && response.length === 0) {
      hasReturnedAllResults = true;

    }

    this.setState({
      cardList,
      requestParams,
      hasReturnedAllResults,
      isLoading: false,
    })
  };

  updateSearchParams = (searchBarParams) => {
    let requestParams = this.state.requestParams;

    requestParams.searchQuery = safeDefaults(searchBarParams.searchQuery);
    requestParams.orderBy = safeDefaults(searchBarParams.orderBy, 'name');
    requestParams.page = 1;

    this.setState({
      requestParams,
      cardList: []
    }, () => {
      this.getCards(this.state.requestParams);
    });
  }

  render() {
    let { cardList, isLoading, hasReturnedAllResults, error } = this.state;
    // TODO: Move the text values below to a constants file
    const headingTitle = 'Magic the Gathering Coding Exercise';
    const headingCopy = 'Keep scrolling to load more cards!';
    const noResultsFoundCopy = "Additional results aren't available for that request. Please try another search using different search parameters.";

    return (
      <div className="home-wrapper" ref={el => this.home = el}>
        <Header />
        <main className='body-content' role='main'>
          <Copy title={headingTitle} copy={headingCopy} />
          <SearchBar
            disableSearchButton={isLoading}
            fetchCardsCallback={this.updateSearchParams}
            orderBy={safeDefaults(this.state.requestParams.orderBy)}/>
          <div className='card-tile-container'>
            { this.generateCardTiles(cardList) }
          </div>
          <Loader isLoading={isLoading} />
          { hasReturnedAllResults &&
            <Copy copyClassName='no-results' copy={noResultsFoundCopy} />
          }
          { error &&
             <Copy copyClassName='api-error' copy={error} />
          }
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
