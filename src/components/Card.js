import React from "react";

const Card = ({ img, title, subtitle }) => {
  return (
    <div>
      <div id="card" className="card p-3 pb-0" style={{ width: "200px" }}>
        <img
          src={img}
          className="card-img-top rounded"
          height="250px"
          alt="..."
          style={{
            // boxShadow: "1px 1px 5px rgba(225,225,1225,0.3)",
            // minHeight: "250px",
          }}
        />
        <div className="card-body text-center pb-0">
          <h4
            className="mt-2"
            style={{
              fontWeight: 800,
              fontSize: "small",
              color: "#3a84f1",
              padding: 0,
              marginBottom: "0.3rem",
              letterSpacing: "2px",
            }}
          >
            {title}
          </h4>
          <p className="pb-1" style={{ letterSpacing: '2px'}}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
