import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const StyledcartList = styled.div`
  .tableContainer {
    margin: 1rem;
    thead > tr > th {
      height: 1rem;
      text-align: center;
      font-weight: 500;
      text-transform: uppercase;
    }

    tbody {
      img {
        height: 70px;
      }

      tr > th {
        display: flex;
        justify-content: center;
      }

      tr > td > div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70px;
      }
    }
  }

  .nameSneaker {
    font-size: 0.8rem;
  }

  .btn-outline-success {
    width: 4.5rem;
  }

  .emptyCart {
    text-align: center;
    color: var(--gray);
  }

  @media screen and (min-width: 768px) {
    table {
      thead {
        letter-spacing: 5px;
      }
    }

    .nameSneaker {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 1280px) {
    .tableContainer {
      display: flex;
      justify-content: center;

      table {
        width: 70%;
      }

      tbody {
        img {
          height: 150px;
        }

        tr > td > div {
          height: 150px;
          font-size: 1.25rem;
        }
      }
    }
  }
`;

function CartList(list) {
  const dispatch = useDispatch();
  const data = list.data[0];
  console.log(data);
  const deleteItem = (id) => (e) => {
    e.preventDefault();
    let itemId = id;
    dispatch({
      type: "REMOVE_ITEM_FROM_CART",
      payload: itemId,
    });
  };

  const clearCart = (e) => {
    e.preventDefault();
    dispatch({
      type: "CLEAR_CART",
    });
  };

  function isEmpty() {
    if (data < 1) {
      return <div className="emptyCart"> Your Cart is Empty</div>;
    } else {
      return (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Size</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, cover, sneaker, sneakerSize, sneakerPrice }) => (
              <tr key={id}>
                <th>
                  <img src={cover} alt="cover" />
                </th>
                <td className="nameSneaker">
                  <div>{sneaker}</div>
                </td>
                <td>
                  <div>{sneakerSize}</div>
                </td>
                <td>
                  <div>${sneakerPrice}</div>
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={deleteItem(id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={clearCart}
                  >
                    Buy
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  }

  return (
    <>
      <StyledcartList>
        <div className="tableContainer">{isEmpty()}</div>
      </StyledcartList>
    </>
  );
}

export default CartList;
