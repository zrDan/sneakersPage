import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const StyledlateralMenu = styled.div`
  .lateral-menu {
    background: var(--gray);
    display: grid;
    grid-template-columns: repeat(3, 33.3%);
    grid-template-rows: 13% 87%;
    width: 100%;
  }

  .filterTitle {
    font-weight: bold;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .brandSpan {
    display: none;
  }

  .mobile-menu {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    height: 3.3rem;
    width: 3.3rem;
    z-index: 1;
    right: 0;
    bottom: 0;
    background: var(--black);
    margin: 0 1.3rem 2rem 0;
    padding: 1rem;
    border-radius: 50%;

    i {
      color: white;
    }
  }

  .mobile-nav {
    display: none;
  }

  .mobile-nav-position {
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 0;
  }

  .close {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 4;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 3rem;
    padding-right: 1em;
  }

  .clearFilters {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
    display: flex;
    height: 3rem;
    padding-left: 1em;
    align-items: center;
  }

  .menu-filter {
    padding: 1rem 0 1em 1em;

    ul > li {
      list-style-type: none;
      padding-top: 0.5rem;
    }

    ul > li > input {
      margin-right: 0.5em;
    }
  }

  .brand-icon {
    width: 23px;
  }

  .custom-checkbox {
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 1280px) {
    .mobile-menu {
      display: none;
    }
    .clearFilters,
    .close {
      display: none;
    }

    .lateral-menu {
      background: none;
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: repeat(3, 33.3%);
      height: 75vh;
      width: 12rem;
      border-right: 1px solid var(--gray);
    }

    .menu-filter {
      display: grid;
      padding: 0.5rem 0 0.5rem 2rem;
      align-content: center;
      width: 100%;
    }
    .custom-control-label {
      display: flex;
      align-items: center;
      width: 100%;
      img {
        height: 17px;
        width: 17px;
        margin-right: 8px;
      }
    }

    .brandSpan {
      display: block;
    }
  }
`;

function LateralMenu() {
  const dispatch = useDispatch();

  const listOfFilters = useSelector((state) => state.filterState);
  const [filters, setFilters] = useState(listOfFilters);

  const mobileNav = (isActive) => (e) => {
    e.preventDefault();
    let lateralMenu = document.getElementById("lateralMenu");
    if (isActive === "hidde") {
      lateralMenu.classList.add("mobile-nav");
    } else {
      lateralMenu.classList.remove("mobile-nav");
    }
  };

  const sneakerType = (sneakerType) => (e) => {
    const jordanBox = document.getElementById("jordanCheck");
    const runningBox = document.getElementById("runningCheck");
    const basketballBox = document.getElementById("basketballCheck");
    if (e.target.checked) {
      if (sneakerType === "jordan") {
        runningBox.checked = false;
        basketballBox.checked = false;

        filterAction("category", sneakerType);
      } else if (sneakerType === "running") {
        jordanBox.checked = false;
        basketballBox.checked = false;

        filterAction("category", sneakerType);
      } else {
        runningBox.checked = false;
        jordanBox.checked = false;

        filterAction("category", sneakerType);
      }
    } else {
      filterAction("category", "");
    }
  };

  const genreType = (genreType) => (e) => {
    const menBox = document.getElementById("menCheck");
    const womenBox = document.getElementById("womenCheck");

    if (e.target.checked) {
      if (genreType === "men") {
        womenBox.checked = false;

        filterAction("genre", genreType);
      } else {
        menBox.checked = false;

        filterAction("genre", genreType);
      }
    } else {
      filterAction("genre", "");
    }
  };

  const brandType = (brandType) => (e) => {
    const nikeBox = document.getElementById("nikeCheck");
    const adidasBox = document.getElementById("adidasCheck");
    const pumaBox = document.getElementById("pumaCheck");
    const underarmorBox = document.getElementById("underarmorCheck");

    if (e.target.checked) {
      if (brandType === "Nike") {
        adidasBox.checked = false;
        pumaBox.checked = false;
        underarmorBox.checked = false;

        filterAction("brand", brandType);
      } else if (brandType === "Adidas") {
        nikeBox.checked = false;
        pumaBox.checked = false;
        underarmorBox.checked = false;

        filterAction("brand", brandType);
      } else if (brandType === "Puma") {
        adidasBox.checked = false;
        nikeBox.checked = false;
        underarmorBox.checked = false;

        filterAction("brand", brandType);
      } else if (brandType === "Under Armor") {
        adidasBox.checked = false;
        pumaBox.checked = false;
        nikeBox.checked = false;

        filterAction("brand", brandType);
      }
    } else {
      filterAction("brand", "");
    }
  };

  function filterAction(filterType, filterValue) {
    if (filterType === "brand") {
      setFilters({ ...filters, brand: filterValue });
    } else if (filterType === "genre") {
      setFilters({ ...filters, genre: filterValue });
    } else {
      setFilters({ ...filters, category: filterValue });
    }
  }

  function clearFilters() {
    const inputs = document.querySelectorAll("input[type='checkbox']");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }

    dispatch({
      type: "CLEAR_FILTERS",
      payload: false,
    });
  }

  function mobileFloatingNav() {
    let windowSize = window.innerWidth;
    if (windowSize < 1280) {
      let lateralMenu = document.getElementById("lateralMenu");
      lateralMenu.classList.add("mobile-nav");
      lateralMenu.classList.add("mobile-nav-position");
    }
  }

  useEffect(() => {
    mobileFloatingNav();
    dispatch({
      type: "SET_FILTERS",
      payload: filters,
    });
  }, [filters]);

  return (
    <StyledlateralMenu>
      <div className="mobile-menu">
        <i className="fas fa-bars fa-lg" onClick={mobileNav("active")}></i>
      </div>
      <div className="lateral-menu" id="lateralMenu">
        <div className="clearFilters" onClick={clearFilters}>
          <i className="fas fa-trash"></i>
        </div>
        <div className="close">
          <i className="fas fa-times" onClick={mobileNav("hidde")}></i>
        </div>

        <div className="menu-filter">
          <span className="filterTitle">Genre </span>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="menCheck"
              onClick={genreType("men")}
            />
            <label className="custom-control-label" htmlFor="menCheck">
              Men
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="womenCheck"
              onClick={genreType("women")}
            />
            <label className="custom-control-label" htmlFor="womenCheck">
              Women
            </label>
          </div>
        </div>
        <div className="menu-filter">
          <span className="filterTitle">Brand </span>
          <div className="brands-selection">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="nikeCheck"
                onClick={brandType("Nike")}
              />
              <label className="custom-control-label" htmlFor="nikeCheck">
                <img
                  className="brand-icon"
                  src="/brands/nike-logo.png"
                  alt="logo"
                />
                <span className="brandSpan">Nike</span>
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="adidasCheck"
                onClick={brandType("Adidas")}
              />
              <label className="custom-control-label" htmlFor="adidasCheck">
                <img
                  className="brand-icon"
                  src="/brands/adidas-logo.png"
                  alt="logo"
                />
                <span className="brandSpan">Adidas</span>
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="pumaCheck"
                onClick={brandType("Puma")}
              />
              <label className="custom-control-label" htmlFor="pumaCheck">
                <img
                  className="brand-icon"
                  src="/brands/puma-logo.png"
                  alt="logo"
                />
                <span className="brandSpan">Puma</span>
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="underarmorCheck"
                onClick={brandType("Under Armor")}
              />
              <label className="custom-control-label" htmlFor="underarmorCheck">
                <img
                  className="brand-icon"
                  src="/brands/underarmor-logo.png"
                  alt="logo"
                />
                <span className="brandSpan">Under Armor</span>
              </label>
            </div>
          </div>
        </div>
        <div className="menu-filter">
          <span className="filterTitle">Type </span>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="runningCheck"
              onClick={sneakerType("running")}
            />
            <label className="custom-control-label" htmlFor="runningCheck">
              Running
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="basketballCheck"
              onClick={sneakerType("basketball")}
            />
            <label className="custom-control-label" htmlFor="basketballCheck">
              Basketball
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="jordanCheck"
              onClick={sneakerType("jordan")}
            />
            <label className="custom-control-label" htmlFor="jordanCheck">
              Jordan
            </label>
          </div>
        </div>
      </div>
    </StyledlateralMenu>
  );
}

export default LateralMenu;
