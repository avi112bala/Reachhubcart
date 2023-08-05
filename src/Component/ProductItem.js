import React from 'react'

const ProductItem = ({ cartItem, onDelete }) => {
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
      <div>
        <h2>Cart Items</h2>
        <ul>
          {cartItem.map((items) => (
            <div
              class="card "
              style={{ width: "18em", display: "flex", height: "500px" }}
            >
              <img
                key={items.id}
                src={items.image}
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
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h5 class="card-title">{items.title}</h5>
                  <h6 class="card-title">${items.price}</h6>
                </div>
                <p
                  class="card-text"
                  style={{ height: "100%", overflow: "hidden" }}
                >
                  {items.description}
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {renderRatingStars(items.rating.rate)}
                <p style={{ marginLeft: "5px", marginTop: "14px" }}>
                  ({items.rating.count})
                </p>
                <button
                  onClick={() => onDelete(items.id)}
                  class="btn btn-primary"
                >
                  Delete Product
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductItem
