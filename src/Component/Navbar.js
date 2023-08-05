import React from 'react'
import { Link,Outlet } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Img from './Image.png'




const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/" class="nav-link active ms-5 " aria-current="page">
            <h1 style={{ fontStyle: "bold" }}>
              <img
                src={Img}
                alt="imag"
                style={{ height: "5rem", width: "8rem" }}
              />
              ShopCart
            </h1>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse ms-5"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-5 mb-2 mb-lg-1 gap-5">
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link a class="dropdown-item">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link a class="dropdown-item">
                      Another Action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link a class="dropdown-item">Something else here</Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link to="/deal" class="nav-link active" aria-current="page">
                  Deals
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/what" class="nav-link active" aria-current="page">
                  What's New
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/deliver" class="nav-link active" aria-current="page">
                  Delivery
                </Link>
              </li>
              <form class="d-flex" role="search">
                <div>
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <SearchIcon
                    style={{
                      position: "absolute",
                      marginLeft: "10rem",
                      top: 32,
                      color: "gray",
                    }}
                  />
                </div>
              </form>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    to="/account"
                    class="nav-link active"
                    aria-current="page"
                  >
                    Account
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/product" class="nav-link active" aria-current="page">
                    <ShoppingCartIcon style={{fontSize:"2rem"}}/>Cart
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar
