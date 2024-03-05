import React from 'react'
import aiimage from '../assets/aiimage.jpg'

const Card = ({img, title, subtitle}) => {
  return (
    <div className="col">
            <div id="card" className="card p-3 pb-0" style={{ width: "18rem" }}>
              <img
                src={img}
                className="card-img-top rounded"
                height="260px"
                alt="..."
                style={{ boxShadow: "1px 1px 5px rgba(225,225,1225,0.3)" }}
              />
              <div className="card-body text-center pb-0">
                <p
                  className="mt-2"
                  style={{
                    fontWeight: 900,
                    fontSize: "large",
                    color: "#3a84f1",
                    padding: 0,
                    marginBottom: "0.3rem",
                  }}
                >
                  {title}
                </p>
                <h4 className="pb-1">{subtitle}</h4>
              </div>
            </div>
          </div>
  )
}

export default Card