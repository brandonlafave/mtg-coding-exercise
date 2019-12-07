import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { mount } from 'enzyme';

describe('<Card />', () => {
  let props = {
    image: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409626&type=card',
    name: 'Abattoir Ghoul',
    artist: 'Volkan Baǵa',
    setName: 'Duel Decks: Blessed vs. Cursed',
    type: 'Creature — Zombie'
  };

  let wrapper = mount(<Card { ...props }/>);;

  it('renders the <Card /> component without crashing', () => {
    expect(wrapper.find('.card-wrapper').length).toEqual(1);
  });

  it('renders the <Card /> image', () => {
    expect(wrapper.find('.card-image').prop('src')).toEqual(props.image);
  });

  it('renders the <Card /> name', () => {
    expect(wrapper.find('.card-name').text()).toEqual(`Name: ${props.name}`);
  });

  it('renders the <Card /> artist', () => {
    expect(wrapper.find('.card-artist').text()).toEqual(`Artist: ${props.artist}`);
  });

  it('renders the <Card /> set', () => {
    expect(wrapper.find('.card-set').text()).toEqual(`Set Name: ${props.setName}`);
  });

  it('renders the <Card /> type', () => {
    expect(wrapper.find('.card-type').text()).toEqual(`Type: ${props.type}`);
  });
});
