"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineTrash } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import {
  clearCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "@/utils/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
  const [isClient, setIsClient] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const totalAmount = useSelector((store) => store.cart.totalAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading....</div>;
  }

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap lg:flex-nowrap items-start justify-center gap-8 lg:gap-20 mt-2 lg:mt-8 ">
        <div className="lg:w-[40rem]">
          <div className="flex items-center justify-between p-4 mb-4">
            <h2 className="text-3xl font-semibold mb-0">Cart</h2>
            <button
              onClick={handleClearCart}
              className="font-semibold text-sm flex items-center gap-1"
            >
              <HiOutlineTrash size={20} /> Remove All
            </button>
          </div>
          {cartItems?.length === 0 ? (
            <div className="flex justify-center items-center text-center py-12">
              <h1>Cart is Empty, Please add products...</h1>
            </div>
          ) : (
            <div className=" ">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b mb-4"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4 px-4">
                    <div>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-28 h-28 rounded-lg border border-gray-300 "
                      />
                    </div>
                    <div>
                      <p className="font-semibold mb-2">{item.title}</p>
                      <div className="rounded border py-[2px] w-[6rem] bg-gray-200 flex items-center justify-center gap-4">
                        <button onClick={() => handleDecreaseQuantity(item.id)}>
                          <FaMinus size={10} />
                        </button>
                        <span className="font-medium text-lg">
                          {item.minimumOrderQuantity}
                        </span>
                        <button onClick={() => handleIncreaseQuantity(item.id)}>
                          <FaPlus size={10} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="px-4 font-bold text-center text-xl">
                      $ {item.price}
                    </p>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="font-semibold text-xs flex items-center justify-center gap-1"
                    >
                      <HiOutlineTrash size={15} /> Remove
                    </button>{" "}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border px-6 py-6 rounded-lg w-80">
          <div className="mb-4 text-gray-600 flex justify-between">
            <p>Subtotal</p>{" "}
            <p className="font-semibold">${totalAmount.toFixed(2)}</p>
          </div>
          <div className=" mb-4 text-gray-600 flex justify-between">
            <p>Discount</p> <p className="font-semibold">$0</p>
          </div>
          <div className="border mb-4"></div>
          <div className="mb-4 font-semibold flex justify-between">
            <p>Grand Total</p>
            <p className="font-semibold text-xl">${totalAmount.toFixed(2)}</p>
          </div>
          <button className="px-16 py-2 text-sm bg-black text-white rounded-md">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
