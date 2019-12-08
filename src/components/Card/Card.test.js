import React from 'react';
import Card from './Card';
import {
  SET_LABEL,
  NAME_LABEL,
  SAMPLE_CARD,
  ARTIST_LABEL,
  DEFAULT_IMAGE_URL,
  NO_INFO_AVAILABLE,
  ORIGINAL_TYPE_LABEL
} from './constants';
import { mount } from 'enzyme';

describe('<Card />', () => {
  let wrapper = mount(<Card { ...SAMPLE_CARD }/>);

  it('renders the <Card /> component without crashing', () => {
    expect(wrapper.find('.card-wrapper').length).toEqual(1);
  });

  describe('<Card /> Image Tests', () => {
    it('renders the card image', () => {
      expect(wrapper.find('.card-image').prop('src')).toEqual(SAMPLE_CARD.imageUrl);
    });

    it('defaults to a placeholder image if none is available for the card', () => {
      SAMPLE_CARD.imageUrl = '';
      wrapper = mount(<Card { ...SAMPLE_CARD }/>);

      expect(wrapper.find('.card-image').prop('src')).toEqual(DEFAULT_IMAGE_URL);
    });
  });

  describe('<Card /> Name Field Tests', () => {
    it('renders the card name label', () => {
      expect(wrapper.find('.card-name th').text()).toEqual(NAME_LABEL);
    });

    it('renders the card name value', () => {
      expect(wrapper.find('.card-name td').text()).toEqual(SAMPLE_CARD.name);
    });

    it('defaults to a placeholder message if the name information is not available', () => {
      SAMPLE_CARD.name = '';
      wrapper = mount(<Card { ...SAMPLE_CARD }/>);

      expect(wrapper.find('.card-name td').text()).toEqual(NO_INFO_AVAILABLE);
    });
  });

  describe('<Card /> Artist Field Tests', () => {
    it('renders the card artist label', () => {
      expect(wrapper.find('.card-artist th').text()).toEqual(ARTIST_LABEL);
    });

    it('renders the card artist value', () => {
      expect(wrapper.find('.card-artist td').text()).toEqual(SAMPLE_CARD.artist);
    });

    it('defaults to a placeholder message if the artist information is not available', () => {
      SAMPLE_CARD.artist = '';
      wrapper = mount(<Card { ...SAMPLE_CARD }/>);

      expect(wrapper.find('.card-artist td').text()).toEqual(NO_INFO_AVAILABLE);
    });
  });

  describe('<Card /> Set Field Tests', () => {
    it('renders the card set label', () => {
      expect(wrapper.find('.card-set th').text()).toEqual(SET_LABEL);
    });

    it('renders the card set value', () => {
      expect(wrapper.find('.card-set td').text()).toEqual(SAMPLE_CARD.setName);
    });

    it('defaults to a placeholder message if the set name information is not available', () => {
      SAMPLE_CARD.setName = '';
      wrapper = mount(<Card { ...SAMPLE_CARD }/>);

      expect(wrapper.find('.card-set td').text()).toEqual(NO_INFO_AVAILABLE);
    });
  });

  describe('<Card /> Type Field Tests', () => {
    it('renders the card original type label', () => {
      expect(wrapper.find('.card-type th').text()).toEqual(ORIGINAL_TYPE_LABEL);
    });

    it('renders the card original type value', () => {
      expect(wrapper.find('.card-type td').text()).toEqual(SAMPLE_CARD.originalType);
    });

    it('defaults to a placeholder message if the type information is not available', () => {
      SAMPLE_CARD.originalType = '';
      wrapper = mount(<Card { ...SAMPLE_CARD }/>);

      expect(wrapper.find('.card-type td').text()).toEqual(NO_INFO_AVAILABLE);
    });
  });
});
