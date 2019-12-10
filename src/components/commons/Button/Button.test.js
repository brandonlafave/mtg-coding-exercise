import React from 'react';
import Button from './Button';
import { mount } from 'enzyme';

describe('<Button />', () => {
  let props = {
    id: 'submitButton',
    buttonClassName: 'button-class',
    buttonTitle: 'Submit title',
    buttonLabel: 'Submit button label',
    ariaLabel: 'Submit button aria label',
    isDisabled: false
  };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Button { ...props }/>);
  })

  it('renders the Button component without crashing', () => {
    expect(wrapper.find('.button').length).toEqual(1);
  });

  it('accepts an ID property when present', () => {
    expect(wrapper.find('.button').prop('id')).toEqual(props.id);
  });

  it('accepts a buttonClassName property when present', () => {
    expect(wrapper.find('.button').prop('className')).toEqual(`button ${props.buttonClassName}`);
  });

  it('accepts a buttonTitle property when present', () => {
    expect(wrapper.find('.button').prop('title')).toEqual(props.buttonTitle);
  });

  it('accepts a buttonLabel property when present', () => {
    expect(wrapper.find('.button').text()).toEqual(props.buttonLabel);
  });

  it('accepts a ariaLabel property when present', () => {
    expect(wrapper.find('.button').prop('aria-label')).toEqual(props.ariaLabel);
  });

  it('calls the callback function passed to the Button when clicked', () => {
    const mockCallBack = jest.fn();

    wrapper.setProps({
      onClick: mockCallBack
    });

    wrapper.update();
    wrapper.find('.button').simulate('click');

    expect(mockCallBack).toHaveBeenCalled();
  });

  it('should disable the button when isDisabled is true', () => {
    wrapper.setProps({
      isDisabled: true
    });

    expect(wrapper.find('.button').props()).toHaveProperty('disabled');
  });
});
