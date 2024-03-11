import React from "react";

const Products = ({ setSelectedNavItem }) => {
  return (
    // <div>Products</div>

    <div
      className="d-flex align-items-center"
      style={{ justifyContent: "space-around", width: "100%", height: "80vh" }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50px",
        }}
      >
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/500748448?h=7417e40e7a&autoplay=1&muted=1"
          width="100%"
          height="70%"
          autoplay="1"
          frameborder="0"
          allowfullscreen
          style={{ borderRadius: "10px" }}
        ></iframe>
      </div>
      <div>
        <h6
          style={{
            color: "aqua",
            fontSize: "large",
            letterSpacing: 7,
            fontWeight: "bolder",
          }}
        >
          DISCOVER
        </h6>
        <h1 style={{ letterSpacing: 10, fontWeight: "bolder" }}>WE BUILD</h1>
        <h1 style={{ letterSpacing: 10, fontWeight: "bolder" }}>
          DIGITAL EXPERINCES
        </h1>
        <button
          className="btn"
          id="button"
          onClick={() => setSelectedNavItem("Services")}
        >
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default Products;
