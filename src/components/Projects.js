import React from 'react'
import Card from "./Card";
import waves from "../assets/Waves.mp4";

const Projects = () => {
  return (
    <>
      <h1 id="header-text">Projects</h1>
        <video
          autoPlay
          muted
          loop
          playsInline
          id="background-video"
        >
          <source src={waves} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      <div class="row card-container">
        {/* <canvas id="waveCanvas"></canvas> */}
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
    </>
  )
}

export default Projects