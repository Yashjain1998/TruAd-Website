import React from "react";
import Card from "./Card";

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
            "https://img.freepik.com/premium-photo/person-with-back-human-with-word-ai-back_86390-10851.jpg?w=2000"
          }
          title={"Virtual Technology"}
          subtitle={"Decentralized AI"}
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
