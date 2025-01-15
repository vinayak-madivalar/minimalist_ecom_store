"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosStar } from "react-icons/io";
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
            className="mt-3 h-28 rounded-lg "
          >
            {product.images?.map((img, index) => (
              <div key={index} className="grid justify-items-start">
                <SwiperSlide>
                  <button className="flex h-full w-full items-start justify-start  border border-gray-300">
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
            {product.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 mr-1 text-xs border rounded-md bg-blue-400 text-white"
              >
                {tag}
              </span>
            ))}
          </p>
          <span className="flex items-center justify-start gap-4 font-medium mb-4">
            <p className="text-lg flex gap-1 items-center ">
              {product.rating} <IoIosStar color="#de7921" size={20} />
            </p>
            <p>|</p>
            <p className="text-gray-500">{getRandomNumber(100, 300)} Rating</p>
          </span>

          <p className="text-2xl font-semibold mb-2 flex">
            <svg
              width="28px"
              height="28px"
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
            </svg>{" "}
            {product.price}
          </p>
          <p className="text-green-600 font-medium font-sans mb-4">
            inclusive of all taxes
          </p>
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => handleAddItem(product)}
              className="px-8 lg:px-16 py-3 border-black font-semibold border rounded"
            >
              Add to Cart
            </button>
            <button className="px-8 lg:px-16 py-3 font-semibold rounded bg-black text-white ">
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
            {product.reviews?.map((review, index) => (
              <div className="mb-6" key={index}>
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
