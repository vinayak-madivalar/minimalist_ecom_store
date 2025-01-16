"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import Link from "next/link";
import Rating from "./Rating";
import ProductList from "./ProductList";
import Shimmer from "./Shimmer";

const HeroSection = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("mens-shoes");

  useEffect(() => {
    fetchproduct();
    document.getElementById("new-arrival").focus();
    scrollToTop();
  }, []);

  const fetchproduct = async () => {
    const data = await fetch(
      "https://dummyjson.com/products/category/womens-dresses?limit=4"
    );
    const json = await data.json();
    setProducts(json.products);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const slides = [
    { id: 1, imgUrl: "3.png", alt: "slide 1" },
    { id: 2, imgUrl: "1.png", alt: "slide 2" },
    { id: 3, imgUrl: "4.png", alt: "slide 3" },
    { id: 4, imgUrl: "2.png", alt: "slide 4" },
    { id: 5, imgUrl: "5.png", alt: "slide 5" },
  ];
  return (
    <div>
      <div className="w-full ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          navigation
          className="h-[25rem] w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Link href={"/products"}>
                <img
                  src={slide.imgUrl}
                  alt={slide.alt}
                  className="w-full h-full object-contain"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="my-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          Featured Products
        </h1>
        <p class="text-gray-600 max-w-xl text-center font-sans mx-auto">
          Discover our handpicked selection of trending items that combine
          style, quality, and value.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 my-6">
          {products.length === 0 ? (
            <Shimmer />
          ) : (
            products.map((product) => (
              <Link href={"/products/" + product.id} key={product.id}>
                <div className="border bg-gray-50 hover:bg-white hover:shadow-xl rounded-md my-4 mx-4 pb-4 flex flex-col justify-center items-center">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-3/4 h-3/4"
                  />
                  <div className="flex flex-col justify-start items-center ">
                    <p className="font-semibold text-center pt-2 pb-1 text-blue-800 hover:underline">
                      {product.title}
                    </p>
                    <Rating data={product} size={"100"} />
                    <p className="pt-1 text-center text-lg flex items-center font-bold">
                      <BsCurrencyDollar size={20} />
                      {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
        <div className="flex justify-center items-center">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            <Link href={"/products"} className="flex items-center gap-2">
              View All Products <FaArrowRight size={18} />
            </Link>
          </button>
        </div>
      </div>
      <div className="mb-8 bg-gray-100 py-12">
        <h1 className="text-center mb-6 text-3xl md:text-4xl font-semibold">
          Latest Products
        </h1>
        <div className="flex items-center justify-center px-2 gap-4 overflow-x-auto">
          <button
            id="new-arrival"
            className="lg:px-6 px-2 py-2 border border-blue-600 text-blue-600 uppercase  text-sm font-semibold focus:bg-blue-600 focus:text-white rounded "
            onClick={() => handleCategoryChange("mens-shoes")}
          >
            New Arrivals
          </button>
          <button
            className="lg:px-6 px-2 py-2 border uppercase text-sm rounded font-semibold  border-blue-600 text-blue-600 focus:bg-blue-600 focus:text-white"
            onClick={() => handleCategoryChange("mens-watches")}
          >
            Best Sellers
          </button>
          <button
            className="lg:px-6 px-2 py-2 border uppercase text-sm rounded font-semibold border-blue-600 text-blue-600 focus:bg-blue-600 focus:text-white"
            onClick={() => handleCategoryChange("home-decoration")}
          >
            Trending
          </button>
        </div>
        <div>
          <div className="mx-0 lg:mx-8">
            <ProductList selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
