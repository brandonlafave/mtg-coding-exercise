import React from 'react';
import SelectField from './SelectField';
import { mount } from 'enzyme';

describe('<SelectField />', () => {
  let props = {
    id: 'selectField',
    label: 'Sort By',
    options: [{
      name: 'Name',
      value: 'name'
    }],
    changeCallback: jest.fn()
  };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<SelectField { ...props }/>);
  });

  it('renders the SelectField component without crashing', () => {
    expect(wrapper.find('.select-field-wrapper').length).toEqual(1);
  });

  it('accepts a label property when passed to the component', () => {
    expect(wrapper.find('.select-field-label').text()).toEqual(props.label);
  });

  it("should trigger the callback function when the SelectField changes", () => {
    const mockCallBack = jest.fn();

    wrapper.setProps({
      changeCallback: mockCallBack
    });

    wrapper.find('.select-field').simulate('change');
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should return options if the options passed are an array with at least one item", () => {
    wrapper.setProps({
      options: [{
        name: 'Name',
        value: 'name'
      },
      {
        name: 'Artist',
        value: 'artist'
      }]
    });

    expect(wrapper.find('.select-field-wrapper option').length).toEqual(2);
  });

  it("should not return any options if the options passed aren't an array with at least one item", () => {
    wrapper.setProps({
      options: []
    });

    expect(wrapper.find('.select-field-wrapper option').length).toEqual(0);
  });
});
