"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TiStarFullOutline } from "react-icons/ti";
import { PiUserCircleDuotone } from "react-icons/pi";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useDispatch } from "react-redux";
import { addItem } from "@/utils/cartSlice";
import Rating from "@/components/Rating";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [thumbSwiper, setThumbSwiper] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchproduct();
  }, []);

  async function fetchproduct() {
    const data = await fetch("https://dummyjson.com/products/" + id);
    const json = await data.json();
    setProduct(json);
  }

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-12 my-8">
        <div className="w-full px-4 lg:w-1/2">
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null,
            }}
            modules={[FreeMode, Thumbs]}
            className="h-auto w-full md:w-[26rem] rounded-md border"
          >
            {product.images?.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-auto">
                  <img src={img} alt={""} className=" h-auto w-full " />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/*Thumbnails*/}
          <Swiper
            onSwiper={setThumbSwiper}
            loop={true}
            spaceBetween={12}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mt-3 h-28 rounded-lg"
          >
            {product.images?.map((img, index) => (
              <div key={index} className="grid justify-items-start">
                <SwiperSlide>
                  <button className="flex h-full w-full items-start justify-start ">
                    <img
                      src={img}
                      alt={""}
                      className="block h-full w-full object-contain"
                    />
                  </button>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <h1 className="mb-3">{product.title}</h1>
          <p className="mb-3">
            tags:{" "}
            {product.tags?.map((tag) => (
              <span className="px-2 py-1 mr-1 text-xs border rounded-sm bg-blue-300 text-white">
                {tag}
              </span>
            ))}
          </p>
          <span className="flex items-center justify-start gap-4 font-medium mb-4">
            <p className="text-lg flex gap-1 items-center ">
              {product.rating} <TiStarFullOutline color="gold" size={20} />
            </p>
            <p>|</p>
            <p className="text-gray-500">{getRandomNumber(100, 300)} Rating</p>
          </span>

          <p className="text-2xl font-medium mb-2">$ {product.price}</p>
          <p className="text-green-600 font-medium font-sans mb-4">
            inclusive of all taxes
          </p>
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => handleAddItem(product)}
              className="px-8 lg:px-16 py-3 bg-black text-white font-medium border"
            >
              Add to Cart
            </button>
            <button className="px-8 lg:px-16 py-3 font-medium border-black border">
              Buy Now
            </button>
          </div>
          <div className="mb-8">
            <h2 className="mb-2 font-semibold">Product Details</h2>
            <p className="font-sans text-gray-500 md:w-[28rem] mb-2">
              {product.description}
            </p>
            <p className="font-sans mb-2 ">
              Product Dimensions - {product.dimensions?.depth}D x{" "}
              {product.dimensions?.width}W x {product.dimensions?.height}H
            </p>
            <p className="font-sans font-medium">Brand - {product.brand}</p>
          </div>
          <div>
            <h2 className="font-semibold">Customer Reviews</h2>
            {product.reviews?.map((review) => (
              <div className="mb-6">
                <h3 className="flex gap-2 items-center mb-1 text-lg font-medium">
                  <PiUserCircleDuotone size={25} /> {review.reviewerName}
                </h3>
                <p className="mb-1">
                  <Rating data={review} />
                </p>
                <p className="font-sans text-gray-500 mb-1">{review.date}</p>
                <p className="font-sans font-medium">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
