const index1Components_in_Component1=()=>{
  return `import React from 'react';
import Car from'./path-to-component-Car/Car';

class Garage extends React.Component{
  render() {
    return (
      <div>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </div>
    );
  }
}

export default Garage;`
}

export default index1Components_in_Component1;