import React from 'react';
import Copy from './Copy';
import { mount } from 'enzyme';

describe('<Copy />', () => {
  let props = {
    title: 'Copy Title',
    copy: 'Scroll down the page to load more results'
  };
  let wrapper = mount(<Copy { ...props }/>);

  it('renders the Copy component without crashing', () => {
    expect(wrapper.find('.copy-wrapper').length).toEqual(1);
  });

  it('displays the Copy component title when present', () => {
    expect(wrapper.find('.copy-title').text()).toEqual(props.title);
  });

  it('displays the Copy component copy text when present', () => {
    expect(wrapper.find('.copy-text').text()).toEqual(props.copy);
  });

  it('hides the Copy component title when missing', () => {
    wrapper.setProps({title: ''});
    expect(wrapper.find('.copy-title').length).toEqual(0);
  });

  it('hides the Copy component copy text when missing', () => {
    wrapper.setProps({copy: ''});
    expect(wrapper.find('.copy-text').length).toEqual(0);
  });
});
