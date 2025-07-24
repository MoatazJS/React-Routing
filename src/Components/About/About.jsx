import React from "react";
import { FaStar, FaPlus } from "react-icons/fa";
export default function About() {
  return (
    <>
      <div className="content bg-info text-white min-vh-100 d-flex flex-column align-items-center justify-content-center ">
        <div className="header text-center mb-4">
          <h1 className="fw-bold fs-1 text-uppercase">about component</h1>
          <div className="d-flex justify-content-center align-items-center my-3">
            <div
              className="bg-light"
              style={{ height: "4px", width: "80px" }}
            ></div>
            <FaPlus className="mx-3 fs-4" />
            <div
              className="bg-light"
              style={{ height: "4px", width: "80px" }}
            ></div>
          </div>
        </div>

        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
