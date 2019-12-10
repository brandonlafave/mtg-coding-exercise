import React from 'react';
import InputField from './InputField';
import { mount } from 'enzyme';

describe('<InputField />', () => {
  let props = {
    id: 'search',
    label: 'Input label',
    placeholderText: 'Input label placeholder text'
  };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<InputField { ...props } />);
  });

  it('renders the InputField component without crashing', () => {
    expect(wrapper.find('.input-field-wrapper').length).toEqual(1);
  });

  it('accepts a label property when passed to the component', () => {
    expect(wrapper.find('.input-field-label').text()).toEqual(props.label);
  });

  it('triggers the callback function passed to InputField when the input changes', () => {
    const mockCallBack = jest.fn();

    wrapper.setProps({
      changeCallback: mockCallBack
    });

    wrapper.update();
    wrapper.find('.input-field-wrapper input').simulate('change');

    expect(mockCallBack).toHaveBeenCalled();
  });
});
