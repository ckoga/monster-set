import React from 'react';
import { App } from './App'; //all tests need this
import { shallow } from 'enzyme';


describe('App', () => {
  let wrapper;
  beforeEach(() => {
      wrapper = shallow(<App 
        fetchArmors={jest.fn()}
        fetchWeapons={jest.fn()} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  
})