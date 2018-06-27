import React from 'react';
import { shallow } from 'enzyme';
import List from '../../components/List'


describe ('List', () => {

  let list;

    beforeEach( () => {
      list = shallow(<List />)
    })

  describe('renders correctly', () => {
    it('renders components correctly', () => {
      expect(list).toMatchSnapshot();
      
    })
  })
})