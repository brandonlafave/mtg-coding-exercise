import React from 'react';
import Home from './Home';
import { mount } from 'enzyme';
import { CARD_ONE_LIST, CARD_TWO_LIST } from '../components/Card/constants';

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Home />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('generateCardTiles Tests', () => {
    it('should not display cards if the card list is an empty array', () => {
        expect(wrapper.find('.card-wrapper').length).toEqual(0);
    });

    it('should not display cards if the card list is not an array', () => {
      wrapper.setState({
        cardList: null
      });

      expect(wrapper.find('.card-wrapper').length).toEqual(0);
    });

    it('should return the card tiles if an array ', () => {
      wrapper.setState({
        cardList: CARD_ONE_LIST
      });

      expect(wrapper.find('.card-name td').text()).toEqual('Abattoir Ghoul');
    });
  });

  describe('handleCardResponse Tests', () => {
    beforeEach(() => {
      wrapper.setState({
        cardList: CARD_ONE_LIST
      });
    });

    it('should turn the loader off after handling the response', () => {
        wrapper.instance().handleCardResponse(CARD_ONE_LIST);

        expect(wrapper.state('isLoading')).toEqual(false);
    });

    it('should concatenate the response with the cards list when the response is an array', () => {
      wrapper.instance().handleCardResponse(CARD_TWO_LIST);

      expect(wrapper.state('cardList').length).toEqual(2);
    });

    it('should increment the page value if the response is an array with at least one value', () => {
      wrapper.instance().handleCardResponse(CARD_TWO_LIST);

      expect(wrapper.state('requestParams')['page']).toEqual(2);
    });

    it('should not concatenate the response with the cards list when the response is not an array', () => {
      wrapper.instance().handleCardResponse({});

      expect(wrapper.state('cardList').length).toEqual(1);
    });

    it('should not increment the page value if the response is not an array with at least one value', () => {
      wrapper.instance().handleCardResponse({});
      expect(wrapper.state('requestParams')['page']).toEqual(1);
    });

    it('should set hasReturnedAllResults to true when the cards array is empty', () => {
      wrapper.instance().handleCardResponse([]);
      expect(wrapper.state('hasReturnedAllResults')).toEqual(true);
    });
  });

  describe('infiniteScrollRequest Tests', () => {
    it('should return null if the user has not reached the bottom of the page', () => {
      const infiniteScrollRequest = wrapper.instance().infiniteScrollRequest(1500, 300, 2000);

      expect(infiniteScrollRequest).toEqual(null);
    });
  });

  describe('No Results Available Tests', () => {
    it('should display the no results Copy component if no additional results are found', () => {
      wrapper.setState({
        hasReturnedAllResults: true
      });

      expect(wrapper.find('.no-results').length).toEqual(1);
    });

    it('should hide the no results Copy component if additional results are found', () => {
      wrapper.setState({
        hasReturnedAllResults: false
      });

      expect(wrapper.find('.no-results').length).toEqual(0);
    });
  });

  describe('updateSearchParams Tests', () => {
    let searchParams;

    beforeEach(() => {
      searchParams = {
        searchQuery: '&name=Goblin',
        orderBy: 'artist'
      };
      wrapper.instance().updateSearchParams(searchParams);
    });

    it('should update the searchQuery value in the state', () => {
      expect(wrapper.state('requestParams').searchQuery).toEqual(searchParams.searchQuery);
    });

    it('should update the orderBy value in the state', () => {
      expect(wrapper.state('requestParams').orderBy).toEqual(searchParams.orderBy);
    });

    it('should reset the page value in the state', () => {
      expect(wrapper.state('requestParams').page).toEqual(1);
    });

    it('should return early if there are no more results and the query params have not changed', () => {
      wrapper.setState({
        hasReturnedAllResults: true,
        prevRequestParams: searchParams
      })

      expect(wrapper.instance().updateSearchParams(searchParams)).toEqual(undefined);
    });
  });

  describe('API Error Tests', () => {
    it('should display the error returned from the API s are found', () => {
      wrapper.setState({
        error: "We're unable to process your request right now."
      });

      expect(wrapper.find('.api-error').length).toEqual(1);
    });

    it('should hide the no results Copy component if additional results are found', () => {
      wrapper.setState({
        error: ''
      });

      expect(wrapper.find('.api-error').length).toEqual(0);
    });
  });
});
