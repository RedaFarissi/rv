const index7this_state0=()=>{
  return`import React, { Component } from "react";
  import "./App.css";
  
  class App extends Component {
  constructor() {
    super();
  
    this.state = ["Admin", { id: "1", name: "Reda Eskouni" }, true];
  }
  
  render() {
    return (
      <div>
        <ul>
          <li style={{ fontSize: 24, color: "red" }}>{this.state[0]}</li>
          <li style={{ fontSize: 24, color: "red" }}>{this.state[1].id}</li>
          <li style={{ fontSize: 24, color: "red" }}>{this.state[1].name}</li>
          <li>
            the state this.state[2] is
            {this.state[2] ? "true" : "false"}
          </li>
        </ul>
      </div>
    );
  }
  }
  
  export default App;`
}



export default index7this_state0