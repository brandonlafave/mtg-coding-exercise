import React from 'react';
import SearchBar from './SearchBar';
import { mount } from 'enzyme';

describe('<SearchBar />', () => {
  let props = {
    orderBy: 'name',
    isLoading: false,
    fetchCardsCallback: jest.fn()
  };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<SearchBar { ...props }/>);
  });

  it('renders the SearchBar component without crashing', () => {
    expect(wrapper.find('.search-bar-wrapper').length).toEqual(1);
  });

  it('calls the fetchCardsCallback function passed to the SearchBar when clicked', () => {
    const mockCallBack = jest.fn();

    wrapper.setState({
      searchQuery: '&name=Goblin',
      orderBy: 'name'
    });

    wrapper.setProps({
      fetchCardsCallback: mockCallBack
    });

    wrapper.find('.button').simulate('click');

    expect(mockCallBack).toHaveBeenCalledWith({
      "orderBy": "name",
      "searchQuery": "&name=Goblin"
    });
  });

  it("should trigger the callback function when the InputField changes", () => {
    const event = { target: { id: 'search', value: 'Goblin'}};

    wrapper.instance().handleInputChange(event);

    expect(wrapper.state('searchQuery')).toEqual('&name=Goblin');
  });

  it("should trigger the callback function when the SelectField changes", () => {
    const event = { target: { id: 'sort', value: 'type'}};

    wrapper.instance().handleInputChange(event);

    expect(wrapper.state('orderBy')).toEqual('type');
  });
});
