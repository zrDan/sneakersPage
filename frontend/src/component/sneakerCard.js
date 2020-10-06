import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledsneakerCard = styled.div`
  a {
    text-decoration: none;
    color: var(--black);
  }

  .card {
    display: grid;
    grid-template-rows: 55% 45%;
    margin-bottom: 1.8rem;
    border: 1.5px solid var(--gray);
    height: 20rem;
    width: 18rem;
    animation: appearing 1s;
  }

  .cover {
    display: flex;
    justify-content: center;
    background: var(--bg-gray);
    img {
      height: 11rem;
      animation: appearing 1s;
    }
  }

  .information {
    display: grid;
    height: 100%;
    padding: 0.2rem 0.8rem 0 0.8rem;
  }

  .brand-type {
    display: flex;
    font-size: 0.8rem;
    letter-spacing: 0.2rem;
    color: var(--gray);
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
  }

  @media screen and (min-width: 1280px) {
    .card {
      &:hover {
        .cover > img {
          animation: rotateSneaker 1.5s forwards;
        }
      }
    }
  }
`;

function SneakerCard({ id, name, category, brand, price, model }) {
  return (
    <StyledsneakerCard>
      <Link to={`/sneakers/${id}`}>
        <div className="card">
          <div className="cover">
            <img loading="lazy" src={model[0]} alt={name} />
          </div>
          <div className="information">
            <h5>{name}</h5>
            <p>${price} usd</p>
            <div className="brand-type">
              <p>{brand}</p>
              <p>{category}</p>
            </div>
          </div>
        </div>
      </Link>
    </StyledsneakerCard>
  );
}

export default SneakerCard;
