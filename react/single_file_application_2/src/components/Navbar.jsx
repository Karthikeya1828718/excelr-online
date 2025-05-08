import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <Link to="/products">
            <button className="btn btn-outline-primary">Products</button>
          </Link>

          <Link to="/users">
            <button className="btn btn-outline-primary">Users</button>
          </Link>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;