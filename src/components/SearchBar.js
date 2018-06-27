import React, { Component } from 'react';


class SearchBar extends Component {

  constructor(props){
    super(props)
  
   this.state = {
     search: ''
   };
  
   this.handleChange = this.handleChange.bind(this);

  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })

    this.props.onSearch(event.target.value)
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