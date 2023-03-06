import React, { useState } from "react";
import Form from "./components/Form/Form.js";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx"
import Teacher from "./components/Teacher/Teacher.jsx"
import data from "./components/MockData.js";


const App = () => {
  const [product, setProduct] = useState(data);
  const filterData = (category) => {
    const filterItem = data.filter((el) => {
      return el.category === category;
   
    });
    setProduct(filterItem);
    console.log(filterItem);
  };

  return (
    <div>
      <Navbar/>
      <Header/>
      <Teacher/>      
      <Form/> 

      <div style={{ display: "flex", justifyContent: "center", gap: 20,marginBottom:20,marginTop:20 }}>
        <button style={{border:'none',borderRadius:10,padding:"10px 20px"}} onClick={() => filterData("breakfast")}>brakfast</button>
        <button style={{border:'none',borderRadius:10,padding:'10px 20px'}} onClick={() => filterData("fruit")}>Meyve</button>
        <button style={{border:'none',borderRadius:10,padding:'10px 20px'}} onClick={() => filterData("drink")}>Drinks</button>
        <button style={{border:'none',borderRadius:10,padding:'10px 20px'}} onClick={() => setProduct(data)}>All</button>
      </div>
      <div className="container">
        <div className="row">
          {product.length > 0 ? (
            product.map((el, id) => (
              <div key={id} className="col-lg-4">
                <img
                  style={{ width: "100%", height: 300, objectFit: "cover",borderRadius:10}}
                  src={el.images}
                />
                <h2>{el.name}</h2>
                <p>{el.title}</p>
              </div>
            ))
          ) : (
            <h1>Loading....</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
