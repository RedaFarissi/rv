const index1class_Component_this_props0=()=>{
return `import React, { Component } from "react";

class Paragraph extends Component {
stylemethod() {
  return {
    backgroundColor: this.props.design[0],
    color: this.props.design[1],
  };
}

render() {
  return (
    <p style={this.stylemethod()}>
      {this.props.p_test}
    </p>
  );
}
}

export default Paragraph;`
}



export default index1class_Component_this_props0