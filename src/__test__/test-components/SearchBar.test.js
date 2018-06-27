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

  describe('changes the state', () => {
    it('changes the state when enter input in searchbox', () => {
      search.find('#search').simulate('change', {target: { name:"search", value:"trump"}})
      expect(search.state('news')).toHaveLength(20);
    })
  })
})