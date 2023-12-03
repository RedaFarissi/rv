const index1JSX=()=>{
return `function App() {
  let a = 2, b = 9;

  const myElement = (
    <ul>
      <li> a = {a} </li>
      <li> b = {b} </li>
      <li> a+b = {a+b} </li>
    </ul>
  );
  
  return (
    <>
      {myElement}
    </>
  );
}

export default App;
`
}

export default index1JSX;