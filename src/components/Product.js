import React from "react";
import Card from "./card/Card";
import img from '../assets/img.png'
const Services = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div>
        <h1 id="header-text">PRODUCTS</h1>
      </div>
      <div
        id="card-container"
      >
       
        <Card
          img={img
          }
          title={"NITRON"}
          subtitle={"Our platform driven by AI, visual engines and imaging technology can provide brands with one stop integrated marketing solutions."}
        />
    
        
      </div>
    </div>
  );
};

export default Services;
