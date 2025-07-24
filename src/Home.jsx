import React from "react";
import heroImage from "./assets/third.png";

export default function Home() {
  return (
    <>
      <div className="content text-center bg-info text-white min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <div className="image">
          <img
            src={heroImage}
            alt="Owl Image"
            className="rounded-circle  p-2"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="header">
          <h1 className="fw-bold fs-1">START FRAMEWORK</h1>
        </div>
        <div className="paragraph">
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
