import React, { Component } from "react";
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';

class App extends Component{

  constructor(props){
    super(props);
    
    this.state = {
      news: []
    }
  };

  render() {
    return (
      <div>
        <Title title={"REACT NEWS"}/>
        <SearchBar />
      </div>
      
    )
  }
}

export default App;