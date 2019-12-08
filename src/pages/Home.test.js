import React from 'react';
import Home from './Home';
import { mount } from 'enzyme';
import { SAMPLE_CARD } from '../components/Card/constants';

describe('<Home />', () => {
  let wrapper = mount(<Home />);

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
      let cardList = [];
          cardList[0] = SAMPLE_CARD;

      wrapper.setState({
        cardList
      });

      expect(wrapper.find('.card-name td').text()).toEqual('Abattoir Ghoul');
    });
  });
});
