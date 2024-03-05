import React, { useEffect, useState } from "react";
import "./Main.css";
import Logo from "../assets/TruAd_Logo.png";
import Card from "./Card";
import Community from "./Community";
import Services from "./Services";
import aiimage from "../assets/aiimage.jpg";
import waves from "../assets/Waves.mp4";
import Projects from "./Projects";
import About from "./About";
import Products from "./Products";
import Pricing from "./Pricing";

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
            style={{ paddingTop: "2.5rem", fontSize: "large" }}
          >
            <ul>
              <li onClick={() => setSelectedNavItem("Products")}>Products</li>
              <li onClick={() => setSelectedNavItem("Services")}>Services</li>
              <li onClick={() => setSelectedNavItem("Pricing")}>Pricing</li>
            </ul>
          </div>
          <div className="nav-icon col-4 text-center">
            <img
              src="https://www.truad.co/wp-content/uploads/2023/11/logo_transparent_1-150x150.png"
              alt="logo"
              height="140px"
            />
          </div>
          <div
            className="col-4 pe-5"
            style={{ paddingTop: "2.5rem", fontSize: "large" }}
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
      {
  selectedNavItem === 'Community' ? <Community /> :
  selectedNavItem === 'Services' ? <Services /> :
  selectedNavItem === 'Projects' ? <Projects /> :
  selectedNavItem === 'About Us' ? <About /> :
  selectedNavItem === 'Products' ? <Products /> :
  <Pricing />
}
      </div>
    </div>
  );
};

export default Main;
