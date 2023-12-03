const index7this_state1=()=>{
  return`import React, {Component} from "react";
  import './App.css';
  
  class App extends Component {
  
  constructor() {
    super();
  
    this.state = ["Admin", {id:"1", name: "Reda Eskouni"}, true];
    // to say to react react we mean this.state here
    this.addValueToStateArray = this.addValueToStateArray.bind(this);
  }
  
  addValueToStateArray() {
    this.setState(["Usser", {id:"2", name: "Reda Eskouni"}, true, true]);
  }
  
  render() {
    return (
      <div>
        <ul>
          <li>{this.state[0]}</li>
          <li>{this.state[1].id}</li>
          <li>{this.state[1].name}</li>
          <li>
            the state {this.state[2]} is {this.state[2] ? "true" : "false"}
          </li>
          <li>
            the state {this.state[3]} is {this.state[3] ? "true" : "false"}
          </li>
        </ul>
  
        <button className="btn border" onClick={this.addValueToStateArray}>
          Change
        </button>
      </div>
    );
  }
  }
  
  export default App;`
}


export default index7this_state1