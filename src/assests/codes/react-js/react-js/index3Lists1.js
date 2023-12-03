const index3Lists1=()=>{
  return`import React from "react";
  import "./App.css";
  
  import Item from "./Item";
  
  function Item(props) {
    return (
      <tr>
        <td>{props.name}</td>
        <td>{props.age}</td>
      </tr>
    );
  }
  
  class App extends React.Component {
      constructor() {
        super();
        this.state = {
          users: [
            { id: "1", name: "kama186758", age: "26" },
            { id: "2", name: "ama186758", age: "29" },
            { id: "3", name: "kamila58", age: "23" },
            { id: "4", name: "thami08", age: "19" },
            { id: "5", name: "Reda6758", age: "16" },
          ],
        };
      }
  
      render() {
        const items = this.state.users.map((e) => (
          <Item key={e.id} name={e.name} age={e.age} />
        ));
        
        return (
          <table className="table">
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
            {items}
          </table>
        );
      }
  }
  
  export default App;`

}

export default index3Lists1