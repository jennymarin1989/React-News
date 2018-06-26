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
      expect(search).toMatchSnapshot();
    })
  });

  describe('input box ', () => {
    it('renders input box correctly',() => {
      expect(search.find('#search')).toHaveLength(1)
    })
  });

  describe('Initializes search state successfully', () => {
    it('Initializes search state to empty string', () => {
      expect(search.state('search')).toEqual('');
    })
  })
})