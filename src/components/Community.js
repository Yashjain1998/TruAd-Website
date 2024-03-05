import React from "react";
import Card from "./Card";
import waves from "../assets/Waves.mp4";

const Community = () => {
  return (
    <>
      <h1 id="header-text">Community</h1>
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
          img="https://www.truad.co/wp-content/uploads/2024/02/poster.jpg"
          title="Working with Producers"
          subtitle="We work with film producers and production companies to increase their revenue streams before the film is released, or before it hits the OTT platform"
        />
        <Card
          img="https://www.truad.co/wp-content/uploads/2024/02/ZEE-TV-shows.jpg"
          title="Working with Broadcasters"
          subtitle="We work with paid TV and free to air. Our tools get implemented seemlessly in the backend. That way, channels make more money and less intervention."
        />
        <Card
          img="https://www.truad.co/wp-content/uploads/2024/02/ottmovies.jpg"
          title="Working with OTT"
          subtitle="Our tech is seemless. working with the biggest providers to automate the advertising process for you."
        />
        <Card
          img="https://www.truad.co/wp-content/uploads/2024/02/Indian-Local-Brands.jpg"
          title="Working with brands"
          subtitle="We work with top brands to get them maximum exposure in any form of media on Film, TV, OTT or any video medium"
        />
      </div>
    </>
  );
};

export default Community;
