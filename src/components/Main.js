import React, { useEffect, useState } from "react";
import "./Main.css";
import Community from "./Community";
import Services from "./Services";
import Projects from "./Projects";
import About from "./About";
import Products from "./Products";
import Pricing from "./Pricing";
import waves from "../assets/Waves.mp4";

const Main = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [selectedNavItem, setSelectedNavItem] = useState("Services"); // Default component to show

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 3000);
  }, []);

  const handleNavItemClick = (component) => {
    setSelectedNavItem(component);
  };

  return (
    <div id="container">
      <header>
        <nav className="row">
          <div
            className="col-4"
            style={{ paddingTop: "2.5rem", fontSize: "1rem", fontWeight:'bolder', letterSpacing: '1px',}}
          >
            <ul>
              <li onClick={() => setSelectedNavItem("Products")}>Products</li>
              <li onClick={() => setSelectedNavItem("Services")}>Services</li>
              <li onClick={() => setSelectedNavItem("Pricing")}>Pricing</li>
            </ul>
          </div>
          <div className="nav-icon col-4 text-center" style={{
            height:'100px'
          }}>
            <img
              src="https://www.truad.co/wp-content/uploads/2023/11/logo_transparent_1-150x150.png"
              alt="logo"
              height="140px"
            />
          </div>
          <div
            className="col-4 pe-5"
            style={{ paddingTop: "2.5rem", fontSize: "1rem", fontWeight:'bolder', letterSpacing: '1px',}}
          >
            <ul>
              <li onClick={() => setSelectedNavItem("Projects")}>Projects</li>
              <li onClick={() => setSelectedNavItem("Community")}>Community</li>
              <li onClick={() => setSelectedNavItem("About Us")}>About Us</li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="body">
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
        {selectedNavItem === "Community" ? (
          <Community />
        ) : selectedNavItem === "Services" ? (
          <Services />
        ) : selectedNavItem === "Projects" ? (
          <Projects />
        ) : selectedNavItem === "About Us" ? (
          <About />
        ) : selectedNavItem === "Products" ? (
          <Products />
        ) : (
          <Pricing />
        )}
      </div>
    </div>
  );
};

export default Main;
