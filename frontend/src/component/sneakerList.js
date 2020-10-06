import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SneakerCard from "./sneakerCard";
import styled from "styled-components";

const StyledsneakerList = styled.div`
  @media screen and (min-width: 768px) {
    .sneakerContainer {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      justify-items: center;
      width: 90vw;
    }
  }

  @media screen and (min-width: 1280px) {
    .sneakerContainer {
      grid-template-columns: repeat(3, 33.3%);
      justify-items: center;
      width: 80vw;
    }
  }
`;

function SneakerList() {
  const dispatch = useDispatch();
  const sneakerFilteredList = useSelector((state) => state.filteredList);
  const sneakerStateList = useSelector((state) => state.sneakerList);

  const sneakerList = useSelector((state) => {
    if (sneakerFilteredList) {
      return sneakerFilteredList;
    }
    return sneakerStateList;
  });

  const [status, setStatus] = useState({
    error: "",
    loading: true,
  });
  const { error, loading } = status;

  const showError = () => <h4>{error}</h4>;

  const showLoading = () => loading && <h4>Loading...</h4>;

  useEffect(() => {
    fetch("https://d-sneaker-api.herokuapp.com/api/v1/sneaker")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: "SET_SNEAKER_LIST",
          payload: list,
        });

        setStatus({ ...status, loading: false });
      })
      .catch((err) => {
        console.log("Error: ", err);
        setStatus({ error: err, loading: false });
      });
  }, [dispatch]);

  return (
    <>
      {showError()}
      {showLoading()}
      <StyledsneakerList>
        <div className="sneakerContainer">
          {sneakerList.map(({ _id, name, brand, category, price, model }) => (
            <SneakerCard
              key={_id}
              id={_id}
              name={name}
              brand={brand}
              category={category}
              price={price}
              model={model}
            />
          ))}
        </div>
      </StyledsneakerList>
    </>
  );
}

export default SneakerList;
