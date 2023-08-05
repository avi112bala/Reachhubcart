import axios from "axios";
import React, { useEffect, useState } from "react";


const Deals = ({ AddtoCart }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const style = {
    color: "#ff9999",
  };

  function renderRatingStars(rate) {
    const fullStars = Math.floor(rate);
    const halfStar = rate - fullStars >= 0.5;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star" style={style}></i>);
    }
    if (halfStar) {
      stars.push(
        <i key={fullStars} className="fas fa-star-half-alt" style={style}></i>
      );
    }
    return stars;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          padding: "1rem 0 1rem 1rem",
        }}
      >
        {item.map((data) => (
          <div
            class="card "
            style={{ width: "18em", display: "flex", height: "500px" }}
          >
            <img
              key={data.id}
              src={data.image}
              class="card-img-top"
              alt="..."
              style={{
                maxHeight: "200px",
                width: "100%",
                objectFit: "contain",
              }}
            />
            <div
              class="card-body"
              style={{ height: "100%", overflow: "hidden" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h5 class="card-title">{data.title}</h5>
                <h6 class="card-title">${data.price}</h6>
              </div>
              <p
                class="card-text"
                style={{ height: "100%", overflow: "hidden" }}
              >
                {data.description}
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {renderRatingStars(data.rating.rate)}
              <p style={{ marginLeft: "5px", marginTop: "14px" }}>
                ({data.rating.count})
              </p>
              <button
                onClick={() => {
                  AddtoCart(data);
                }}
                class="btn btn-primary  ms-4"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Deals;
