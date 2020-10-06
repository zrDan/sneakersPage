import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Stylednavbar = styled.div`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    border-bottom: 0.5px solid var(--gray);
  }

  .logo {
    display: flex;
    justify-items: center;
    padding: 0 0 0 0.8rem;

    img {
      height: 3rem;
    }
  }

  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .action-option {
      padding: 0 1.7rem 0 0;

      a {
        color: var(--black);
        text-decoration: none;
      }
    }
  }

  @media screen and (min-width: 1279px) {
    .mobile-menu {
      display: none;
    }
  }
`;

function NavBar() {
  return (
    <Stylednavbar>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={"/logo.svg"} alt="logo" />
          </Link>
        </div>
        <div className="options">
          <div className="action-option">
            <Link to="/profile">
              <i className="fas fa-user fa-lg"></i>
            </Link>
          </div>
          <div className="action-option">
            <Link to="/shopping/cart">
              <i className="fas fa-shopping-cart fa-lg"></i>
            </Link>
          </div>
        </div>
      </nav>
    </Stylednavbar>
  );
}

export default NavBar;
