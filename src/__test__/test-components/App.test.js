import React from "react";
import { shallow } from "enzyme";
import App from '../../components/App';
import Title from '../../components/Title'
import SearchBar from '../../components/SearchBar';


describe('App', ()=> {

  let app;

  beforeEach(() => {
    app = shallow(<App />);
  })

  describe('renders components correctly', ()=> {
    it('renders correctly', () => {
      expect(app).toMatchSnapshot();
    });
  });

  describe('Title ', () =>{
    it('renders Title successfully', () =>{
      expect(app.find(Title)).toHaveLength(1);
    });
  });  

  describe('SearchBar', () => {
    it('renders SearchBar component successfully', () => {
      expect(app.find(SearchBar)).toHaveLength(1);
    })
  })

  // describe('input text field', () => {
  //   it('finds input text field', () => {
  
  //     expect(app.find('#input-field').length).toEqual(1);
  //   })
  // })

  // describe('button', () => {
  //   it('renders button component', () => {
  
  //     expect(app.find('#search-button').length).toEqual(1);
  //   })
  // })
})