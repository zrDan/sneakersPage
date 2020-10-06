import React from "react";
import { useSelector } from "react-redux";
import CartList from "../component/cartList";

function ShoppingCart() {
  const cartListState = useSelector((state) => state.shoppingCart);

  return (
    <div>
      <CartList data={[cartListState]} />
    </div>
  );
}

export default ShoppingCart;
