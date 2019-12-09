import React from 'react';
import Home from './Home';
import { mount } from 'enzyme';
import { CARD_ONE_LIST, CARD_TWO_LIST } from '../components/Card/constants';

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Home />);
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
  });

  describe('infiniteScrollRequest Tests', () => {
    it('should return null if the user has not reached the bottom of the page', () => {
      const infiniteScrollRequest = wrapper.instance().infiniteScrollRequest(1500, 300, 2000);

      expect(infiniteScrollRequest).toEqual(null);
    });

    it.skip('should call getCards one time once when the user has reached the bottom of the page', () => {
      const spy = jest.spyOn(wrapper.instance(), 'getCards');

      for (let i=0; i < 5; i++) {
        wrapper.instance().infiniteScrollRequest(1500, 500, 2000);
      }

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
