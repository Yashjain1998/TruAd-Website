import React from 'react'
import Card from './Card'
import waves from "../assets/Waves.mp4";
import aiimage from "../assets/aiimage.jpg"

const Services = () => {
  return (
    <>
    <h1 id="header-text">SERVICES</h1>
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
        <div className="row card-container">
          < Card img={aiimage} title={'Virtual Technology'} subtitle={'Decentralized AI'}/>
          < Card img={aiimage} title={'Virtual Technology'} subtitle={'Decentralized AI'}/>
          < Card img={aiimage} title={'Virtual Technology'} subtitle={'Decentralized AI'}/>
        </div>
          </>
  )
}

export default Services