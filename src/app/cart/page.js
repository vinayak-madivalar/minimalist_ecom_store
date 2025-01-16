"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineTrash } from "react-icons/hi";
import { FaPlus, FaArrowLeft, FaMinus } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import {
  clearCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "@/utils/cartSlice";
import { useEffect, useState } from "react";
import Link from "next/link";

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
      <div className="bg-gray-50 ">
        <h2 className=" pt-8 pb-4 font-bold text-3xl px-4">Shopping Cart</h2>
        <div className="flex flex-col lg:flex-row gap-8 px-4 mb-16">
          <div className="w-full lg:w-2/3 bg-white shadow-md rounded px-2">
            <div className="flex items-center justify-between p-4 mb-4 border-b">
              <h2 className="text-xl font-semibold mb-0">
                Cart Items ({cartItems.length})
              </h2>
              <button
                onClick={handleClearCart}
                className="font-semibold text-base flex items-center text-red-500 gap-1"
              >
                <HiOutlineTrash size={20} color="red" /> Clear Cart
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
                    className="flex items-start justify-between border-b mb-4"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4 mb-4 px-4">
                      <div>
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-28 h-28 rounded-lg border border-gray-300 "
                        />
                      </div>
                      <div>
                        <p className="font-semibold mb-3">{item.title}</p>
                        <div className="rounded border py-[2px] w-[6rem] bg-gray-200 flex items-center justify-center gap-4">
                          <button
                            onClick={() => handleDecreaseQuantity(item.id)}
                          >
                            <FaMinus size={10} />
                          </button>
                          <span className="font-medium text-lg">
                            {item.minimumOrderQuantity}
                          </span>
                          <button
                            onClick={() => handleIncreaseQuantity(item.id)}
                          >
                            <FaPlus size={10} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="px-4 font-bold text-center text-xl flex justify-center items-center">
                        <BsCurrencyDollar size={23} />
                        {item.price}
                      </p>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="font-semibold text-xs text-red-500 flex items-center justify-center gap-1"
                      >
                        <HiOutlineTrash size={15} color="red" /> Remove
                      </button>{" "}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className=" px-6 py-6 flex flex-col bg-white shadow-md sticky rounded-lg w-full lg:w-1/3">
            <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="mb-4 text-gray-600 flex justify-between">
              <p>Subtotal</p>{" "}
              <p className="font-semibold flex justify-center items-center">
                <BsCurrencyDollar size={18} />
                {totalAmount.toFixed(2)}
              </p>
            </div>
            <div className=" mb-4 text-gray-600 flex justify-between">
              <p>Shipping</p>
              <p className="font-semibold flex justify-center items-center">
                <BsCurrencyDollar size={18} />
                {cartItems?.length === 0 ? 0 : 9.99}
              </p>
            </div>
            <div className=" mb-4 text-gray-600 flex justify-between">
              <p>Tax</p>
              <p className="font-semibold flex justify-center items-center">
                <BsCurrencyDollar size={18} />
                {cartItems?.length === 0 ? 0 : (totalAmount / 10).toFixed(2)}
              </p>
            </div>
            <div className="border mb-4"></div>
            <div className="mb-6 font-semibold text-lg flex justify-between">
              <p>Total</p>
              <p className="font-semibold text-xl flex justify-center items-center">
                <BsCurrencyDollar size={20} />
                {(
                  parseInt(totalAmount.toFixed(2)) +
                  parseInt(cartItems?.length === 0 ? 0 : 9.99) +
                  parseInt(
                    cartItems?.length === 0 ? 0 : (totalAmount / 10).toFixed(2)
                  )
                ).toFixed(2)}
              </p>
            </div>
            <div class="flex space-x-2 mb-6">
              <input
                type="text"
                placeholder="Enter coupon code"
                class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button class="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                Apply
              </button>
            </div>
            <button className="w-full mb-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors flex justify-center items-center gap-2  font-semibold  rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              Proceed to Checkout
            </button>
            <Link
              href={"/products"}
              className="font-semibold flex justify-center items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <FaArrowLeft size={16} /> Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
