const index3Lists0=()=>{
  return`import React from 'react';

  const MyList = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
  
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
  
  export default MyList;`
}

export default index3Lists0