import React, { Component } from 'react';


class SearchBar extends Component {

  constructor(props){
    super(props)
  
   this.state = {
     search: ''
   }
  
  }

  render() {
    return (
      <div>
        <input id="search" />
      </div>  
    )
  }

}

export default SearchBar;