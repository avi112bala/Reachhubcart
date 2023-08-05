import React from 'react'
import Img1 from '../Component/image4 (2).png'

const Free = () => {
  return (
    <>
      <div
        style={{
          width: "80%",
          backgroundColor: "#ff9999",
          height: "250px",
          marginLeft: "10%",
          display: "flex",
          justifyContent:"space-between",
          padding:"1rem 2rem 0 2rem"
          
        }}
      >
        {/* slogan div  */}
        <div style={{height:"233.5px",marginTop:"3.5rem"}}>
          <h2 style={{ color: "#006400 ", fontWeight: "500" }}>
            Grap upto 50% Off On {<br />}Selected Products
          </h2>
          <button
            style={{
              color: "#fff ",
              backgroundColor: "#006400",
              fontWeight: "500",
              borderRadius: "20px",
            }}
          >
            Buy Now
          </button>
        </div>

        {/* picture div  */}
        
          <img
            src={Img1}
            alt="avi"
            style={{ height: "233.5px", backgroundColor: "#faebd7" }}
          />
 
      </div>
    </>
  );
}

export default Free
