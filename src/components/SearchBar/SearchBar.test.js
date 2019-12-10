import React from 'react';
import SearchBar from './SearchBar';
import { mount } from 'enzyme';

describe('<InputField />', () => {
  let props = {
    title: 'Copy Title',
    copy: 'Scroll down the page to load more results'
  };
  let wrapper = mount(<SearchBar { ...props }/>);

  it('renders the Copy component without crashing', () => {
    expect(wrapper.find('.copy-wrapper').length).toEqual(1);
  });
});
