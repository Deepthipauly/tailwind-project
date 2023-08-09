import React from "react";
// import "./cartButton.css";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/cart";

const AfterCart = ({ cartCount, productId }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex relative top-4 items-center transition-all duration-300 ease-in-out">
      <button
        className="mx-4 text-2xl font-semibold"
        onClick={() => dispatch(decrement(productId))}
      >
        -
      </button>
      <div className="text-1xl font-semibold">{cartCount}</div>
      <button
        className="text-2xl font-semibold mx-4"
        onClick={() => dispatch(increment(productId))}
      >
        +
      </button>
    </div>
  );
};

export default AfterCart;
