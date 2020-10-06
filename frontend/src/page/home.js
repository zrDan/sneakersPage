import React from "react";
import styled from "styled-components";
import LateralMenu from "./lateralMenu";
import SneakerList from "../component/sneakerList";

const Styledhome = styled.div`
  .sneakerHomeContainer {
    display: grid;
  }

  .content {
    display: grid;
    justify-content: center;
    margin: 2rem 0;
  }

  @media screen and (min-width: 1280px) {
    .sneakerHomeContainer {
      grid-template-columns: 13% 87%;
      width: 100%;
    }

    .content {
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .lateralMenuFilters {
      grid-column-start: 1;
      grid-column-end: 2;
      display: flex;
      align-items: center;
      position: fixed;
      width: 10rem;
      height: calc(100vh - 3.5rem);
    }
  }
`;

function Home() {
  return (
    <Styledhome>
      <div className="sneakerHomeContainer">
        <div className="lateralMenuFilters">
          <LateralMenu />
        </div>
        <div className="content">
          <SneakerList />
        </div>
      </div>
    </Styledhome>
  );
}

export default Home;
