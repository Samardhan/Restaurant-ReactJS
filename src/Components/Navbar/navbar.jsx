import React from "react";
import { Link } from "react-router-dom";

import "../Navbar/navbar.css";

let Navbar = () => {
  return (
    <>
      <nav className="navbar  container">
        <div className="navele nav-link mx-3 d-flex justify-content-center">
          <Link class=" nav-link active mx-3" aria-current="page" to="/">
            Home
          </Link>
          <Link className="nav-link mx-3" to="/menu">
            Menu
          </Link>
          <Link className="nav-link mx-3" to="/">
            Book-Table
          </Link>
        </div>

        <Link
          className="d-flex align-self-center justify-content-center title nav-link mx-5 active btn btn-toggle"
          to="/"
        >
          <button className="title btn btn-none">
            Developer's <sub>Restaurant</sub>
          </button>
        </Link>

        <form className="cart d-flex justify-content-right me-3 btn btn-none text-white">
          <Link>
            <i class="bi bi-person-circle"></i>
          </Link>
        </form>

        <form
          className="cart d-flex justify-content-right me-3 btn btn-secondary text-white"
          role="search"
        >
          <Link className="nav-link mx-3 bg-none" to="/add">
            Add-Items
          </Link>
        </form>
        <form
          className="cart d-flex justify-content-right me-3 btn btn-secondary text-white"
          role="search"
        >
          <Link class="nav-link " to="/cart">
            <span>
              {" "}
              <i class="bi bi-basket3 bucket me-2"></i>Cart
            </span>
          </Link>
        </form>
      </nav>
      <div className=" line bg-dark ">
        <br />
      </div>
    </>
  );
};
export default Navbar;
