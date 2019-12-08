import React from 'react';
import Footer from './Footer';
import { mount } from 'enzyme';

describe('<Footer />', () => {
  const wrapper = mount(<Footer />);

  it('renders the Footer component without crashing', () => {
    expect(wrapper.find('.footer-wrapper').length).toEqual(1);
  });
});
