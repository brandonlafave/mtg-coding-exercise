import React from 'react';
import Header from './Header';
import { mount } from 'enzyme';

describe('<Header />', () => {
  const wrapper = mount(<Header />);

  it('renders the Header component without crashing', () => {
    expect(wrapper.find('.header-wrapper').length).toEqual(1);
  });
});
