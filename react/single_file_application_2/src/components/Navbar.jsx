import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let search = useRef("");
  let navigate = useNavigate();

  let searchFunc = (e) => {
    // e.preventDefault();
    //  console.log(search.current.value);
    navigate("/search/" + search.current.value);
  };
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
          <Link to="/deleteProduct">
            <button className="btn btn-outline-primary">DeleteProduct</button>
          </Link>
          <Link to="/updateProduct">
            <button className="btn btn-outline-primary">UpdateProduct</button>
          </Link>

          
          <Link to="/saveProduct">
            <button className="btn btn-outline-primary">saveProduct</button>
          </Link>



          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={search}
            />
            <button
              className="btn btn-outline-primary"
              type="submit"
              onClick={searchFunc}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
