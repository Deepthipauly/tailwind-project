import React from "react";
// import "./cartButton.css";
import { useDispatch} from "react-redux";
import { addtoCart } from "../../redux/cart";

const BeforeCart = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="mt-2">
      <button
        className="rounded-none bg-black text-1xl font-semibold border border-white px-3 py-1  text-white"
        onClick={() => dispatch(addtoCart(product))}
      >
        Add to cart
      </button>
    </div>
  );
};
export default BeforeCart;
