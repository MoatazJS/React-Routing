import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
          <a className="navbar-brand fs-4 fw-bold" href="#">
            START FRAMEWORK
          </a>

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

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
