import React from "react";
import Card from "./card/AI Process";

const Projects = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <h1 id="header-text">AI Process</h1>
      </div>

      <div class="card-container" style={{
        display:'grid',
        gridTemplateColumns: 'auto auto auto auto',
        gap: '2rem',
      }}>
        <Card
          img="https://www.truad.co/wp-content/uploads/2023/11/1.jpg"
          title="Progmatic Purchasing"
          subtitle="One button placement and delivery of advertisements"
        />
        <Card
          img="https://www.truad.co/wp-content/uploads/2023/11/2-1.jpg"
          title="Monitored Data"
          subtitle="Support targeted delivery and third-party monitoring"
        />
        <Card
          img="https://www.truad.co/wp-content/uploads/2023/11/3.jpg"
          title="Batch Processing"
          subtitle="Stabdardized 2D/3D models"
        />
      </div>
    </div>
  );
};

export default Projects;
