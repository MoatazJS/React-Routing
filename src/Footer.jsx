import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary text-white py-4">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <h4>Location</h4>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div className="col-md-4 mb-4 mb-md-0">
              <h4 className="text-nowrap">AROUND THE WEB</h4>
              <div className="d-flex justify-content-center flex-nowrap gap-3 my-2">
                <a
                  href="#"
                  target="_blank"
                  className="btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="bi bi-facebook fs-5"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="bi bi-twitter fs-5"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="bi bi-instagram fs-5"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <h4>ABOUT FREELANCER</h4>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className=" text-white text-center p-3 bg-dark">
        <p className="mb-0">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
