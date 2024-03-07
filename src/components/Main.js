import React, { useEffect, useState } from "react";
import "./Main.css";
import Community from "./Community";
import Services from "./Services";
import Projects from "./Projects";
import About from "./About";
import Products from "./Products";
import Pricing from "./Pricing";
import waves from "../assets/Waves.mp4";
import img from "../assets/Logomark.png";

const Main = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [selectedNavItem, setSelectedNavItem] = useState("Products"); // Default component to show
  const [showNav, setShowNav] = useState(false);

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
            className={!showNav ? "col-4 links-container" : "show"}
            // style={{
            //   paddingTop: "2.5rem",
            //   fontSize: "1rem",
            //   fontWeight: "bolder",
            //   letterSpacing: "1px",
            // }}
          >
            <ul className="row">
              <li
                className="col"
                onClick={() => setSelectedNavItem("Products")}
              >
                Products
              </li>
              <li
                className="col"
                onClick={() => setSelectedNavItem("Services")}
              >
                Services
              </li>
              <li className="col" onClick={() => setSelectedNavItem("Pricing")}>
                Pricing
              </li>
            </ul>
          </div>
          <div className="nav-icon col-lg-4 col-6" id="logo">
            <img src={img} alt="logo" height="50px" />
            <span>TruAd</span>
          </div>
          <div className="col-6 nav-btn">
            <button onClick={() => setShowNav(!showNav)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
            </button>
          </div>
          <div className={!showNav ? "col-4 pe-5 links-container" : "show"}>
            <ul className="row">
              <li
                className="col"
                onClick={() => setSelectedNavItem("Projects")}
              >
                Projects
              </li>
              <li
                className="col"
                onClick={() => setSelectedNavItem("Community")}
              >
                Community
              </li>
              <li
                className="col"
                onClick={() => setSelectedNavItem("About Us")}
              >
                About Us
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="body">
        <video autoPlay muted loop playsInline id="background-video">
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
          <Products setSelectedNavItem={setSelectedNavItem} />
        ) : (
          <Pricing />
        )}
      </div>
    </div>
  );
};

export default Main;
