import React, { Component } from "react";

class App extends Component{

  constructor(){
    super();
    this.state = {
      input: ''
    }
  };

  render() {
    return(
      <div className="news">
        <h1> A B C  News </h1>
        <div className="input">
          <input type="text" id="input-field" className="form-control" name="input" placeholder="What news are you looking for.."  />
        </div>
      </div>
    )
  }
}

export default App;