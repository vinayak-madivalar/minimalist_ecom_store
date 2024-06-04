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
    console.log(category);
  };

  const slides = [
    { id: 1, imgUrl: "img1.png", alt: "slide 1" },
    { id: 2, imgUrl: "img2.png", alt: "slide 2" },
    { id: 3, imgUrl: "img3.png", alt: "slide 3" },
  ];
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        effect={"fade"}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        className="h-screen"
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
        <div className="flex w-full h-full">
          {products.map((product) => (
            <Link href={"/products/" + product.id} key={product.id}>
              <div className="border shadow-lg rounded-md my-8 mx-4 pb-4 flex flex-col justify-center items-center">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-auto"
                />
                <p className="font-semibold pt-4 pb-1">{product.title}</p>
                <Rating data={product} />
                <p className="pt-1 font-semibold">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-8 bg-gray-100 py-8">
        <h1 className="text-center mb-6">Latest Products</h1>
        <div className="flex items-center justify-center gap-4">
          <button
            id="new-arrival"
            className="px-6 py-2 border uppercase text-sm font-semibold border-black focus:bg-black focus:text-white"
            onClick={() => handleCategoryChange("mens-shirts")}
          >
            New Arrivals
          </button>
          <button
            className="px-6 py-2 border uppercase text-sm font-semibold border-black focus:bg-black focus:text-white"
            onClick={() => handleCategoryChange("womens-bags")}
          >
            Best Sellers
          </button>
          <button
            className="px-6 py-2 border uppercase text-sm font-semibold border-black focus:bg-black focus:text-white"
            onClick={() => handleCategoryChange("home-decoration")}
          >
            Trending
          </button>
        </div>
        <div>
          <div className=" mx-8">
            <ProductList selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
