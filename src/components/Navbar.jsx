"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import HamBurgurMenu from "./HamBurgurMenu";

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="px-20 py-5">Loading....</div>;
  }

  return (
    <div className="flex justify-between items-center sticky w-full z-50 top-0 py-5 px-4 lg:px-20 font-semibold bg-gray-100">
      <div className="hidden lg:flex items-center gap-16">
        <Link href={"/"}>
          <Logo />
        </Link>
        <ul className="hidden lg:flex items-start gap-6 ">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/products"}>
            <li>Products</li>
          </Link>
          <Link href={"/aboutus"}>
            <li>About</li>
          </Link>
          <Link href={"/contactus"}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="lg:hidden">
        <HamBurgurMenu />
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <Link href={"/products"} className="">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </li>
          </Link>

          <Link href={"/cart"}>
            <li className=" relative">
              <div className="absolute bottom-2 left-3 w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
                {cartItems.length}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
