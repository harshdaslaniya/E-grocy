import React from 'react'
import img1 from "./carousel1.jpg"
import img2 from "./carousel2.jpg"
import img3 from "./carousel3.jpg"
function Carousel() {
  return (
    <div className='container'>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={img1} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={img2} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  )
}

export default Carousel