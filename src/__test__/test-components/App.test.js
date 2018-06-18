import React from "react";
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';
import App from '../../components/App';


describe('App', ()=> {

  describe('renders components correctly', ()=> {
    it('renders correctly', () => {
      const app = shallow(<App />);
      expect(app).toMatchSnapshot();
    });
  });

  describe('initial state ', () =>{
    it('initializes state successfully', () =>{
      const app = shallow(<App />);
      expect(app.state('input')).toEqual("");
    });
  });  

  describe('input text field', () => {
    it('finds input text field', () => {
      const app = shallow(<App />);
      expect(app.find('#input-field').length).toEqual(1);
    })
  })

})