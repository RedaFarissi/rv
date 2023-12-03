const index1function_Component_props=()=>{
return `import React from 'react';

// Define a function component using props
const Greeting = (props) => {
  return <div>Hello, {props.name}!</div>;
};

// Use the component and pass props
const App = () => {
  return (
    <div>
      <Greeting name="John" />
      <Greeting name="Sara" />
    </div>
  );
};

export default App;`
}

export default index1function_Component_props;