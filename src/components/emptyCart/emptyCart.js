import React from "react";

const EmptyCart = () => {
  return (
    <div className="bg-gray-100">
        <div className="flex items-center justify-center w-full min-h-screen">
            <div className="bg-black-500 w-full max-w-3xl p-5 rounded-md shadow-lg text-white">
                
                    <p className="text-red-500 font-extrabold text-3xl"><i class="fa-solid fa-cart-shopping fa-fade fa-xl"></i> Your Cart Is Empty...!!</p>
            </div>
        </div>
    </div>
  );
};

export default EmptyCart;
