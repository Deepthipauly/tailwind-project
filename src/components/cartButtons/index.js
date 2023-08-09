import React, { useMemo } from "react";
import AfterCart from "./AfterCart";
import BeforeCart from "./BeforeCart";
import { useSelector } from "react-redux";

const CartButton = ({ product }) => {
  const { cartList } = useSelector((state) => state.cart);
  const cartCount = useMemo(() => {
    return cartList?.find((item) => item?.id === product?.id)?.count;
  }, [cartList]);
  return (
    <>
      {" "}
      {cartCount > 0 ? (
        <AfterCart productId={product.id} cartCount={cartCount} />
      ) : (
        <BeforeCart product={product} />
      )}{" "}
    </>
  );
};

export default CartButton;
