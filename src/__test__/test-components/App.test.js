import React from "react";
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';
import App from '../../components/App';


describe('App', ()=> {
  it('renders correctly', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  })
})

describe('initial state ', () =>{
  it('initializes state successfully', () =>{
    const app = shallow(<App />);
    expect(app.state('input')).toEqual("");
  })
})