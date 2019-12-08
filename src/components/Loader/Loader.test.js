import React from 'react';
import Loader from './Loader';
import { shallow } from 'enzyme';

describe('<Loader />', () => {
  let wrapper;

  it('displays the loader component without crashing when show is set to true', () => {
    wrapper = shallow(<Loader isLoading={true}/>);

    expect(wrapper.find('.loader-spinner').length).toEqual(1);
  });

  it('does not display the loader component when show is set to false', () => {
    wrapper = shallow(<Loader isLoading={false}/>);

    expect(wrapper.find('.loader-spinner').length).toBe(0);
  });
});
