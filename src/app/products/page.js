"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Rating from "@/components/Rating";
import { useDispatch } from "react-redux";
import { addItem } from "@/utils/cartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOption, setSortOption] = useState("price-desc");
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, [sortOption]);

  const fetchProducts = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products?limit=100");
      const json = await data.json();
      setProducts(json.products);
      setFilteredProducts(json.products);

      let filterProducts = json.products;

      //sorting
      if (sortOption === "price-asc") {
        filterProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === "price-desc") {
        filterProducts.sort((a, b) => b.price - a.price);
      } else if (sortOption === "name-asc") {
        filterProducts.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortOption === "name-desc") {
        filterProducts.sort((a, b) => b.title.localeCompare(a.title));
      }

      setProducts(filterProducts);
    } catch (error) {
      setError(error);
    }
  };

  function countCategories(products) {
    const categoryCount = {};

    products.forEach((product) => {
      const catogory = product.category;
      if (categoryCount[catogory]) {
        categoryCount[catogory] += 1;
      } else {
        categoryCount[catogory] = 1;
      }
    });

    return categoryCount;
  }

  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };

  // Get category count
  const categoryCount = countCategories(products);

  // Filter products by selected category
  const filteredCategoryProduct = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center md:items-start md:justify-start ">
        <aside className="mt-6 pl-4 w-2/12 hidden md:block">
          <div>
            <h2 className="mb-2 font-bold text-2xl">Category</h2>
            <ul>
              {Object.keys(categoryCount).map((category, index) => (
                <li
                  key={index}
                  className="py-2 cursor-pointer font-sans font-medium uppercase text-sm hover:text-blue-800 hover:underline"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({categoryCount[category]})
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <div className="md:w-10/12 px-4 md:px-0">
          <div className="flex flex-wrap gap-10 items-center justify-between mt-6 mx-4">
            <div className="flex md:flex-grow">
              <div className="flex items-center md:flex-grow border">
                <span className="px-3">
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                      stroke="#555"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search Products"
                  value={searchText}
                  className="pl-0 py-3 flex flex-grow outline-0 rounded-none text-sm font-semibold"
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                />
              </div>

              <button
                className="px-2 sm:px-5 py-2 bg-black text-white font-medium"
                type="submit"
                onClick={() => {
                  const filterlist = products.filter((product) =>
                    product.title
                      .toLowerCase()
                      .includes(searchText.toLocaleLowerCase())
                  );

                  setFilteredProducts(filterlist);
                }}
              >
                Search
              </button>
            </div>
            <div className="">
              <label htmlFor="sort" className="mr-2 text-lg font-semibold">
                Sort by
              </label>
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border-2 px-4 py-2 font-semibold"
              >
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <option value="name-asc">Name (A to Z)</option>
                <option value="name-desc">Name (Z to A)</option>
              </select>
            </div>
          </div>
          <div className="grid grid-flow-row mt-4 md:mt-0">
            {selectedCategory && (
              <div>
                <h2 className="mx-4 mt-4 mb-0 font-bold text-2xl">
                  Products in{" "}
                  <span className="capitalize">{selectedCategory}</span>
                </h2>
                <button
                  className="mx-4 my-4 border border-black rounded-sm hover:bg-black hover:text-white px-3 py-1"
                  onClick={() => setSelectedCategory(null)}
                >
                  Show All Products
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  {filteredCategoryProduct.map((product) => (
                    <Link
                      href={"/products/" + product.id}
                      key={product.id}
                      className="border shadow-lg rounded-md my-4 mx-4 pb-4 flex flex-col justify-center items-center"
                    >
                      <div>
                        <img
                          src={product.images[0]}
                          alt={product.title}
                          className="w-full h-auto"
                        />
                        <div className="px-2">
                          <p className="font-medium font-sans text-gray-400 text-sm lg:text-sm pt-1 pb- text-left flex items-center gap-1">
                            {product.category} <Rating data={product} />
                          </p>
                          <p className="font-semibold lg:text-lg pt-2 pb- text-left text-blue-800 hover:underline">
                            {product.title}
                          </p>
                          <div className="flex items-baseline justify-between py-2">
                            <p className="font-bold lg:text-lg text-left flex items-center justify-start font-sans">
                              <BsCurrencyDollar size={20} />
                              {product.price}
                            </p>
                            <button
                              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                              onClick={() => {
                                handleAddItem(product);
                              }}
                            >
                              <FaShoppingCart size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              {!selectedCategory &&
                filteredProducts?.map((product) => (
                  <Link
                    href={"/products/" + product.id}
                    key={product.id}
                    className="border md:shadow-lg md:rounded-md md:my-4 md:mx-4 md:pb-4 flex flex-col justify-center items-center"
                  >
                    <div>
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full"
                      />
                      <div className="px-2">
                        <p className="font-medium font-sans text-gray-400 text-sm lg:text-sm pt-1 pb- text-left flex items-center gap-1">
                          {product.category} <Rating data={product} />
                        </p>
                        <p className="font-semibold lg:text-lg pt-2 pb- text-left text-blue-800 hover:underline">
                          {product.title}
                        </p>
                        <div className="flex items-baseline justify-between py-2">
                          <p className="font-bold lg:text-lg text-left flex items-center justify-start font-sans">
                            <BsCurrencyDollar size={20} />
                            {product.price}
                          </p>
                          <button
                            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                            onClick={() => {
                              handleAddItem(product);
                            }}
                          >
                            <FaShoppingCart size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
