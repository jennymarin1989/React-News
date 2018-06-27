import React, { Component } from 'react';


class SearchBar extends Component {

  constructor(props){
    super(props)
  
   this.state = {
     search: ''
   };
  
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input id="search" value={this.state.search} onChange = {this.handleChange}/>
      </div>  
    )
  }

}

export default SearchBar;