"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";
import Link from "next/link";
import Rating from "./Rating";
import ProductList from "./ProductList";

const HeroSection = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("mens-shirts");

  useEffect(() => {
    fetchproduct();
    document.getElementById("new-arrival").focus();
  }, []);

  const fetchproduct = async () => {
    const data = await fetch(
      "https://dummyjson.com/products/category/womens-dresses"
    );
    const json = await data.json();
    setProducts(json.products);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const slides = [
    { id: 1, imgUrl: "img1.png", alt: "slide 1" },
    { id: 2, imgUrl: "img2.png", alt: "slide 2" },
    { id: 4, imgUrl: "img4.png", alt: "slide 4" },
    { id: 5, imgUrl: "img5.png", alt: "slide 5" },
  ];
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        effect={"fade"}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link href={"/products"}>
              <img
                src={slide.imgUrl}
                alt={slide.alt}
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="my-8">
        <h1 className="text-center">Featured Products</h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 my-4">
          {products.map((product) => (
            <Link href={"/products/" + product.id} key={product.id}>
              <div className="border shadow-lg rounded-md my-4 mx-4 pb-4 flex flex-col justify-center items-center">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-auto"
                />
                <p className="font-semibold text-center pt-2 pb-1">
                  {product.title}
                </p>
                <Rating data={product} />
                <p className="pt-1 text-center font-semibold">
                  $ {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-8 bg-gray-100 py-8">
        <h1 className="text-center mb-6">Latest Products</h1>
        <div className="flex items-center justify-center px-2 gap-4 overflow-x-auto">
          <button
            id="new-arrival"
            className="lg:px-6 px-2 py-2 border uppercase text-sm font-semibold border-black focus:bg-black focus:text-white"
            onClick={() => handleCategoryChange("mens-shirts")}
          >
            New Arrivals
          </button>
          <button
            className="lg:px-6 px-2 py-2 border uppercase text-sm font-semibold border-black focus:bg-black focus:text-white"
            onClick={() => handleCategoryChange("womens-bags")}
          >
            Best Sellers
          </button>
          <button
            className="lg:px-6 px-2 py-2 border uppercase text-sm font-semibold border-black focus:bg-black focus:text-white"
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
