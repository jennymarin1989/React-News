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

  describe('Initializes news state', () => {
    it('initializes news state to empty array', () => {
      expect(app.state('news')).toEqual([]);
    })
  });

  describe('componentDidMount', () => {
    it('should fetch news from API', () => {
      expect (app.state('news')).length.toEqual(20);
    })
  })
})