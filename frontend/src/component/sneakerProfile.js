import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Carousel from "./carousel";

const StyledsneakerProfile = styled.div`
  .sneakerContainer {
    height: calc(100vh - 7rem);
  }

  .header {
    height: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    padding-top: 0.7rem;

    .back {
      padding-left: 0.7rem;
      display: flex;
      i {
        padding-right: 0.3rem;
      }
    }

    .sneakerTitle {
      display: flex;
      flex-flow: column;
      justify-content: center;
      text-align: right;
      padding-right: 0.7rem;

      .name {
        font-size: 1.1rem;
        font-weight: 500;
      }

      .brand {
        font-size: 0.9rem;
        letter-spacing: 0.2rem;
        color: var(--gray);
        text-transform: uppercase;
      }
    }
  }

  .photos {
    display: flex;
    height: 75%;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--gray);

    img {
      height: 80%;
    }
  }

  .sneakerValues {
    display: grid;
    grid-template-columns: repeat(3, 33.3%);
    height: 8rem;
    .option {
      margin-top: 1rem;
      display: grid;
      grid-template-rows: repeat(2, 50%);
      justify-items: center;
      align-content: center;
      height: 5.5rem;
    }

    .option > div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .cart {
      grid-row-start: 2;
      grid-row-end: 3;
      button {
        text-transform: uppercase;
        font-size: 0.75rem;
        height: 2.3rem;
      }
    }
  }

  .messageAlert {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: none;
    align-items: center;
    justify-content: center;

    .alertContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgb(0, 0, 0, 0.7);
      animation: appearing 0.5s;
      height: 4rem;
      width: 16rem;
      border-radius: 10px;
      .alert {
        width: 15rem;
        height: 3rem;
        text-align: center;
        margin: 0;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    .option {
      letter-spacing: 0.2rem;
    }

    .custom-select {
      width: 10rem;
    }
  }
`;

function SneakerProfile({ _id, name, brand, price, size = [], model = [] }) {
  const [sneakerDetails, setSneakerDetails] = useState({
    id: "",
    cover: "",
    sneaker: "",
    sneakerSize: "",
    sneakerPrice: "",
  });

  const [status, setStatus] = useState({
    loading: true,
  });
  const [submitClick, setSubmitClick] = useState({
    clickValue: "",
  });

  const { loading } = status;

  const showLoading = () => loading && <h4>Loading...</h4>;

  const showImages = () => {
    if (!status.loading) {
      return <Carousel photos={model} />;
    }
  };

  const dispatch = useDispatch();

  const history = useHistory();
  function backClick(e) {
    e.preventDefault();
    history.push("/");
  }

  function handleSizeChange(e) {
    setSneakerDetails({
      ...sneakerDetails,
      sneakerSize: parseFloat(e.target.value),
    });
  }

  function handleSubmit() {
    let sizeValue = sneakerDetails.sneakerSize;
    let successMessage = document.getElementById("message");
    successMessage.style.display = "flex";
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 1000);

    if (sizeValue === "") {
      setSneakerDetails({
        sneakerSize: parseFloat(size[0]),
        sneaker: name,
        cover: model[0],
        sneakerPrice: parseFloat(price),
        id: _id,
      });
    } else {
      setSneakerDetails({
        ...sneakerDetails,
        sneaker: name,
        cover: model[0],
        sneakerPrice: parseFloat(price),
        id: _id,
      });
    }

    setSubmitClick({ clickValue: "clicked" });
  }

  useEffect(() => {
    if (model.length > 1) {
      setStatus({ ...status, loading: false });
    }

    if (submitClick.clickValue !== "") {
      dispatch({
        type: "ADD_ITEM_TO_CART",
        payload: sneakerDetails,
      });
    }
  }, [submitClick, model]);

  return (
    <>
      <StyledsneakerProfile>
        <div id="message" className="messageAlert">
          <div className="alertContainer">
            <div className="alert alert-success" role="alert">
              Added to Cart
            </div>
          </div>
        </div>
        <div className="sneakerContainer">
          <div className="header">
            <div className="back">
              <div onClick={backClick}>
                <i className="fas fa-caret-left"></i>
                Back
              </div>
            </div>
            <div className="sneakerTitle">
              <div>
                <p className="name">{name}</p>
                <p className="brand">{brand}</p>
              </div>
            </div>
          </div>
          <div className="photos">
            {showLoading()}
            {showImages()}
          </div>
          <div className="sneakerValues">
            <div className="option price">
              <div>
                <h5>Price</h5>
              </div>
              <div>${price} usd</div>
            </div>
            <div className="option">
              <div>
                <h5>Size</h5>
              </div>
              <div>
                <select
                  name="size"
                  id="size"
                  className="custom-select"
                  onChange={handleSizeChange}
                >
                  {size.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="option">
              <div className="cart">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={handleSubmit}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </StyledsneakerProfile>
    </>
  );
}

export default SneakerProfile;
