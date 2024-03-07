import React from 'react'

const Products = ({setSelectedNavItem}) => {
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
          id='button'
        
          onClick={() => setSelectedNavItem("Services")}
        >
          EXPLORE
        </button>
        </div>
      </div>
    
  
  
  )
}

export default Products