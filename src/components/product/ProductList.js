import React from "react";
import products from "../../api/products.json";
import { useSelector } from "react-redux";
import CartButton from "../cartButtons";

const ProductList = () => {
useSelector((state) => state.cart);

  return (
    <>
    <section className="p-3  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-0 md:gap-0">
      {products?.map((product) => (
        <div  key={product.id} className="rounded overflow-hidden shadow-lg">
          <div className="justify-between px-6 py-4 bg-cover bg-center cursor-pointer">
            <img src={product?.image} alt="baggit" />
            <p className="text-black-300 my-3 font-semibold text-1xl">
              {product.title}
            </p>
            <p className="text-black-300 my-3"> {product?.description}</p>
            <span className="sm:text-sm inline-block">
              <b>Category: {product?.category}</b>
              <br />
              <strong>Price &#x20b9; {product.price}</strong>
            </span>
            <CartButton product={product} />
          </div>
        </div>
      ))}
    </section>
    </>
  );
};

export default ProductList;
