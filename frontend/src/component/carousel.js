import React from "react";
import styled from "styled-components";

const Styledcarousel = styled.div`
  img {
    animation: appearing 1s;
  }

  @media screen and (max-width: 767px) {
    a > span {
      visibility: hidden;
    }
  }

  @media screen and (min-width: 1280px) {
    a > span {
      visibility: hidden;
    }

    .carousel {
      width: 21rem;
    }

    .carousel-indicators li {
      height: 10px;
      background-color: var(--black);
      margin: 0 0.5rem;
    }
  }
`;

function Carousel({ photos }) {
  return (
    <Styledcarousel>
      <div id="carousel" className="carousel" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" className="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={photos[0]} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photos[1]} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photos[2]} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </Styledcarousel>
  );
}

export default Carousel;
