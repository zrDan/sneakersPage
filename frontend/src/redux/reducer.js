export default function reducer(state, action) {
  const sneakerList = state.sneakerList;
  const shoppingCart = state.shoppingCart;
  let newList = "";

  switch (action.type) {
    case "SET_SNEAKER_LIST":
      return { ...state, sneakerList: action.payload };

    case "SET_FILTERS":
      let filterAction = action.payload;
      if (
        filterAction.genre === "" &&
        filterAction.brand === "" &&
        filterAction.category === ""
      ) {
        newList = false;
      } else if (
        filterAction.genre !== "" &&
        filterAction.brand === "" &&
        filterAction.category === ""
      ) {
        newList = sneakerList.filter(
          (item) => item.genre === filterAction.genre || item.genre === "unisex"
        );
      } else if (
        filterAction.genre !== "" &&
        filterAction.brand !== "" &&
        filterAction.category === ""
      ) {
        newList = sneakerList.filter(
          (item) => item.genre === filterAction.genre || item.genre === "unisex"
        );

        newList = newList.filter((item) => item.brand === filterAction.brand);
      } else if (
        filterAction.genre !== "" &&
        filterAction.brand !== "" &&
        filterAction.category !== ""
      ) {
        newList = sneakerList.filter(
          (item) => item.genre === filterAction.genre || item.genre === "unisex"
        );

        newList = newList.filter(
          (item) =>
            item.brand === filterAction.brand &&
            item.category === filterAction.category
        );
      } else if (
        filterAction.genre === "" &&
        filterAction.brand !== "" &&
        filterAction.category === ""
      ) {
        newList = sneakerList.filter(
          (item) => item.brand === filterAction.brand
        );
      } else if (
        filterAction.genre === "" &&
        filterAction.brand !== "" &&
        filterAction.category !== ""
      ) {
        newList = sneakerList.filter(
          (item) =>
            item.brand === filterAction.brand &&
            item.category === filterAction.category
        );
      } else if (
        filterAction.genre === "" &&
        filterAction.brand === "" &&
        filterAction.category !== ""
      ) {
        newList = sneakerList.filter(
          (item) => item.category === filterAction.category
        );
      } else if (
        filterAction.genre !== "" &&
        filterAction.brand === "" &&
        filterAction.category !== ""
      ) {
        newList = sneakerList.filter(
          (item) => item.genre === filterAction.genre || item.genre === "unisex"
        );

        newList = newList.filter(
          (item) => item.category === filterAction.category
        );
      }

      return { ...state, filteredList: newList };

    case "ADD_ITEM_TO_CART":
      let newItem = action.payload;
      let verifyItem = shoppingCart.filter(
        (item) => item.sneaker === newItem.sneaker
      );
      let NewVerifyList = shoppingCart.filter(
        (item) => item.sneaker !== newItem.sneaker
      );

      if (verifyItem.length < 1) {
        shoppingCart.push(newItem);
        return { ...state };
      } else {
        NewVerifyList.push(newItem);
        return { ...state, shoppingCart: NewVerifyList };
      }

    case "REMOVE_ITEM_FROM_CART":
      const dataFilter = shoppingCart.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, shoppingCart: dataFilter };

    case "CLEAR_CART":
      return { ...state, shoppingCart: [] };

    case "CLEAR_FILTERS":
      return { ...state, filteredList: false };

    default:
      return state;
  }
}
