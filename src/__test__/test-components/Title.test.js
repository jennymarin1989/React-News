import React from 'react';
import { shallow } from 'enzyme';
import Title from '../../components/Title';


describe ('Title', () => {
  
  let title;
  beforeEach(() => {
    title = shallow(<Title />)
  });

  it('renders correctly', () => {
    expect(title).toMatchSnapshot();
  });

  it('renders title correctly', () => {
    expect(title.find('#title')).toHaveLength(1)
  });
  
})