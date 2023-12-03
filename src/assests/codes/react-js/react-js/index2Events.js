const index2Events=()=>{
  return`function App() {
  const shoot = () => {
    alert("take Shoot function");
  };
  
  return (
    <button onClick={shoot}>Shoot!</button>
  );
}

export default App;`
}

export default index2Events