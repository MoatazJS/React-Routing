import React from "react";
import { FaStar, FaPlus } from "react-icons/fa";
import img1 from "../../assets/portfolio1.png";
import img2 from "../../assets/portfolio2.png";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.png";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.png";

export default function Portfolio() {
  const portfolioItems = [
    { img: img1, id: 1 },
    { img: img2, id: 2 },
    { img: img3, id: 3 },
    { img: img4, id: 4 },
    { img: img5, id: 5 },
    { img: img6, id: 6 },
  ];
  return (
    <>
      <section
        className="pt-5 mt-5 pb-5 mb-5 bg-white text-dark text-center"
        id="portfolio"
      >
        <h2 className="text-uppercase fw-bold fs-1">Portfolio Component</h2>

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

        <div className="container mt-5">
          <div className="row g-4">
            {portfolioItems.map((item) => (
              <div className="col-md-4 col-sm-6" key={item.id}>
                <div
                  className="card border-0 bg-info d-flex align-items-center justify-content-center"
                  style={{ height: "300px" }}
                >
                  <div
                    className="position-relative rounded-circle overflow-hidden shadow"
                    style={{
                      width: "200px",
                      height: "200px",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={`Portfolio ${item.id}`}
                      className="w-100 h-100 object-fit-cover"
                    />
                    <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-success bg-opacity-75 d-flex justify-content-center align-items-center opacity-0 hover-opacity-100 transition-opacity">
                      <FaPlus className="text-white fs-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
