import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top ${
        props.mode === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">
                {props.aboutText}
              </Link>
            </li>
          </ul>
        </div>
        {/* Toggle Mode Button */}
        <div className="form-check form-switch ms-auto">
          <input
            className="form-check-input"
            type="checkbox"
            id="modeSwitch"
            onChange={props.toggleMode}
            checked={props.mode === "dark"}
          />
          <label
            className="form-check-label"
            htmlFor="modeSwitch"
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            {props.mode === "dark" ? "Enable Light Mode" : "Enable Dark Mode"}
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About us",
};
