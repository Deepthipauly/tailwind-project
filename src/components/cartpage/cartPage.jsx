import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/cart";
import { selectUser } from "../../redux/userSlice";
import EmptyCart from "../emptyCart/emptyCart";

const CartPage = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.cart.cartList);
 const userData = useSelector(selectUser)
  const [data, setData] = useState([]);
  console.log(productData);
  useEffect(() => {
    setData(productData);
  }, [productData]);

  return (
    <>
   { data.length?  <section className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-0 md:gap-0">
      {data?.map((product) => (
        <div key={product.id} className="rounded overflow-hidden shadow-md">
          <div className="justify-between px-3 py-4 bg-contain bg-center cursor-pointer">
            <img src={product.image} alt="baggit" />
            <p className="text-black-300 my-3 font-semibold text-1xl">
              {product.title}
            </p>
            <span className="sm:text-sm inline-block">
              <b>Category:{product.category}</b>
            </span>
            <div className="flex relative top-4 items-center transition-all duration-300 ease-in-out">
              <button
                className="mx-4 text-2xl font-semibold"
                onClick={() => dispatch(decrement(product.id))}
              >
                -
              </button>
              <div className="text-1xl font-semibold">{product.count}</div>
              <button
                className="text-2xl font-semibold mx-4"
                onClick={() => dispatch(increment(product.id))}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>:<EmptyCart/>}
    </>
  );
};

export default CartPage;
