import React, { Component } from "react";
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';
import NewsAPI from 'newsapi';

const newsapi = new NewsAPI('6c0b6c850dc14ee0b9363ec9279f0792')

class App extends Component{

  constructor(props){
    super(props);
    
    this.state = {
      news: []
    }
  };

  componentDidMount (search) {
    newsapi.v2.everything({ sources: 'bbc-news', q: search }).then(response => {
      this.setState({
        news: response.articles,  
    });
  });
    
  }

  render() {
    return (
      <div>
        <Title title={"REACT NEWS"}/>
        <SearchBar  onSearch = { search => this.componentDidMount(search)}/>
      </div>
      
    )
  }
}

export default App;