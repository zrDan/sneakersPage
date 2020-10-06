import reducer from "./reducer";
import { createStore } from "redux";

const initialState = {
  filterState: {
    genre: "",
    brand: "",
    category: "",
  },
  sneakerList: [],
  shoppingCart: [],
  filteredList: false,
};

const store = createStore(reducer, initialState);

export default store;
