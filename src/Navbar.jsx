import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div>
      <nav
        className="navbar nav-expand-lg bg-light shadow"
        style={{ background: "linear-gradient(90deg, black, gray)" }}
      >
        <ul className="navbar nav w-100">
          <li className="nav-item">
            <Link to="/home" className="nav-link" style={{ color: "white" }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/packages"
              className="nav-link"
              style={{ color: "white" }}
            >
              Packages
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/offer" className="nav-link" style={{ color: "white" }}>
              Offer
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contactus"
              className="nav-link"
              style={{ color: "white" }}
            >
              ContactUs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className="nav-link" style={{ color: "white" }}>
              AboutUs
            </Link>
          </li>
          <li className="nav-item ms-auto ">
            <form className="form-inline " onSubmit={handleSearch}>
              <div className="input-group ">
                <input
                  className="form-control rounded-end"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    style={{ marginLeft: "8px" }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </li>
          <li className="nav-item ms-auto" style={{ color: "white" }}>
            <Link to="/map" className="nav-link" style={{ color: "white" }}>
              <FaLocationDot />
            </Link>
          </li>
          <li className="nav-item" style={{ color: "white" }}>
            <Link to="/login" className="nav-link" style={{ color: "white" }}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/register"
              className="nav-link"
              style={{ color: "white" }}
            >
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/dashboard"
              className="nav-link"
              style={{ color: "white" }}
            >
              My Dashboard
            </Link>
          </li>
          <li className="nav-item ms" style={{ color: "white" }}>
            <Link
              to="/favorite"
              className="nav-link"
              style={{ color: "white" }}
              title="Favourite"
            >
              <FaRegHeart />
            </Link>
          </li>
          <li className="nav-item">
            <b style={{ color: "white", marginRight: ".5rem" }}>
              Travel Horizon
            </b>
            <br />
            <img
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50px",
                marginLeft: "1.6rem",
              }}
              src="https://wallpapercave.com/wp/wp7449411.jpg"
              alt="Job Board Logo"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
