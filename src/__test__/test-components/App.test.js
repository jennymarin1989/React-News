import React from "react";
import { shallow } from "enzyme";
import App from '../../components/App';
import Title from '../../components/Title'


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

  describe('initial state ', () =>{
    it('initializes state successfully', () =>{
      expect(app.find(Title)).to.have.length(1);
    });
  });  

  describe('input text field', () => {
    it('finds input text field', () => {
  
      expect(app.find('#input-field').length).toEqual(1);
    })
  })

  describe('button', () => {
    it('renders button component', () => {
  
      expect(app.find('#search-button').length).toEqual(1);
    })
  })
})