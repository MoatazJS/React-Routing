import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <style>{`
        .form-control:focus {
          box-shadow: none;
          border-color: transparent;
        }
      `}</style>
      <section
        className="py-5 bg-white text-dark text-center min-vh-100 mt-5"
        id="contact"
      >
        <h2 className="text-uppercase fw-bold fs-1">Contact section</h2>

        <div className="d-flex justify-content-center align-items-center my-3">
          <div
            className="bg-dark"
            style={{ height: "4px", width: "80px" }}
          ></div>
          <FaPlus className="mx-3 fs-4" />
          <div
            className="bg-dark"
            style={{ height: "4px", width: "80px" }}
          ></div>
        </div>
        <form className="mx-auto text-start" style={{ maxWidth: "700px" }}>
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0"
              id="nameInput"
              placeholder="User Name"
            />
            <label htmlFor="nameInput" className="text-muted">
              User Name
            </label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="number"
              className="form-control border-0 border-bottom rounded-0"
              id="ageInput"
              placeholder="User Age"
            />
            <label htmlFor="ageInput" className="text-muted">
              User Age
            </label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="email"
              className="form-control border-0 border-bottom rounded-0"
              id="emailInput"
              placeholder="User Email"
            />
            <label htmlFor="emailInput" className="text-muted">
              User Email
            </label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control border-0 border-bottom rounded-0"
              id="passwordInput"
              placeholder="User Password"
            />
            <label htmlFor="passwordInput" className="text-muted">
              User Password
            </label>
          </div>

          <button className="btn btn-success px-4">Send Message</button>
        </form>
      </section>
    </>
  );
}
