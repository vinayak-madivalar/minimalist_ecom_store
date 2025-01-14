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
      "https://dummyjson.com/products/category/womens-dresses?limit=4"
    );
    const json = await data.json();
    setProducts(json.products);
    console.log(json.products);
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
      <div className="my-16">
        <h1 className="text-center">Featured Products</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 my-6">
          {products.map((product) => (
            <Link href={"/products/" + product.id} key={product.id}>
              <div className="border shadow-lg rounded-md my-4 mx-4 pb-4 flex flex-col justify-center items-center">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-3/4 h-3/4"
                />
                <div className="flex flex-col justify-start items-center ">
                  <p className="font-semibold text-center pt-2 pb-1">
                    {product.title}
                  </p>
                  <Rating data={product} />
                  <p className="pt-1 text-center text-lg flex items-center font-bold">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                        fill="#000000"
                      />
                    </svg>
                    {product.price}
                  </p>
                </div>
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
