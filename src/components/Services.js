import React from "react";
import Card from "./Card";
import Nitron from "../assets/Nitron.png"

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
          img={
            Nitron
          }
          title={"Nitron"}
          subtitle={"AI Advertising Platform"}
        />
        <Card
          img={
            "https://qph.cf2.quoracdn.net/main-qimg-4409fa98fd2bdb8e89d22db4d1b806e9-lq"
          }
          title={"Virtual Technology"}
          subtitle={"Decentralized AI"}
        />
        <Card
          img={
            "https://th.bing.com/th/id/OIP.DhMNaUi1bf99UZy4KblWEQHaHa?rs=1&pid=ImgDetMain"
          }
          title={"Virtual Technology"}
          subtitle={"Decentralized AI"}
        />
      </div>
    </div>
  );
};

export default Services;
