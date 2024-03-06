import React from 'react'

const Products = () => {
  return (
    // <div>Products</div>
    
      <div className='d-flex align-items-center'>
        <div>
        <h6
          style={{
            color: "aqua",
            fontSize: "large",
            letterSpacing: 7,
            fontWeight: "bolder",
            fontStyle: "italic"
          }}
        >
          DISCOVER
        </h6>
        <h1 style={{ letterSpacing: 10, fontWeight: "bolder" }}>ARTIFICIAL</h1>
        <h1 style={{ letterSpacing: 10, fontWeight: "bolder" }}>
          INTELLIGRNCE
        </h1>
        <button
          className="btn btn-secondary"
          style={{ marginTop: "3rem", padding: "0.5", letterSpacing: 2 }}
        >
          EXPLORE
        </button>
        </div>
      </div>
    
  
  
  )
}

export default Products