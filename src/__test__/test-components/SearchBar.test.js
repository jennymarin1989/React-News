import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../components/SearchBar';


describe( 'SearchBar', () => {

  let search;

  beforeEach( () => {
    search = shallow(<SearchBar />);
  })

  describe('renders correctly', () => {
    it('renders components correctly', () => {
      expect(search).toMatchSnaphot();
    })
  })
})