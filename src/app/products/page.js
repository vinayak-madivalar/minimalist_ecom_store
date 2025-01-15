"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOption, setSortOption] = useState("price-desc");
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [sortOption]);

  const fetchProducts = async () => {
    try {
      const data = await fetch(
        "https://dummyjson.com/products?limit=50&skip=10"
      );
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
        <aside className="mt-4 pl-4 w-2/12 hidden md:block">
          <div>
            <h2 className="mb-2 font-bold text-2xl">Category</h2>
            <ul>
              {Object.keys(categoryCount).map((category, index) => (
                <li
                  key={index}
                  className="py-2 cursor-pointer font-sans font-medium uppercase text-sm "
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({categoryCount[category]})
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <div className="w-10/12">
          <div className="flex flex-wrap gap-10 items-center justify-between mt-4 mx-4">
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
          <div className="grid grid-flow-row">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                        <p className="font-semibold text-xl pt-2 pb-1 text-center">
                          {product.title}
                        </p>
                        <p className="font-medium text-lg pt-0 pb-1 text-center">
                          {product.category}
                        </p>
                        <p className="pt-1 font-semibold text-lg text-center">
                          ${product.price}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {!selectedCategory &&
                filteredProducts?.map((product) => (
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
                      <p className="font-semibold lg:text-xl pt-2 pb-1 text-center text-blue-800 hover:underline">
                        {product.title}
                      </p>
                      <p className="font-medium text-sm lg:text-base pt-0 pb-1 text-center">
                        {product.category}
                      </p>
                      <p className="pt-1 font-bold lg:text-lg text-center flex items-center justify-center">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                            fill="#000000"
                          />
                        </svg>
                        {product.price}
                      </p>
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
