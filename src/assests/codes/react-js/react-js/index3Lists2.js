const index3Lists2=()=>{
  return `import React from "react";

  function Garage() {
    const cars = [
      { id: 1, brand: "Ford" },
      { id: 2, brand: "BMW" },
      { id: 3, brand: "Audi" },
    ];
  
    return (
      <div>
        <h1>My Garage</h1>
        <ul>
          {cars.map((car) => (
            <li key={car.id}>{car.brand}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Garage;`
}

export default index3Lists2