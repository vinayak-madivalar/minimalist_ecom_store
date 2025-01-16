import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

const Rating = (review, size) => {
  return (
    <div>
      {review?.data?.rating <= 2 ? (
        <span className="flex">
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />
        </span>
      ) : review?.data?.rating > 2 && review?.data?.rating < 2.5 ? (
        <span className="flex">
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
        </span>
      ) : review?.data?.rating >= 2.5 && review?.data?.rating < 3 ? (
        <span className="flex">
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStarHalf color="#de7921" size={parseInt(size)} />
        </span>
      ) : review?.data?.rating >= 3 && review?.data?.rating < 3.5 ? (
        <span className="flex">
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
        </span>
      ) : review?.data?.rating >= 3.5 && review?.data?.rating < 4 ? (
        <span className="flex">
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStarHalf color="#de7921" size={parseInt(size)} />
        </span>
      ) : review?.data?.rating >= 4 && review?.data?.rating < 4.5 ? (
        <span className="flex">
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
        </span>
      ) : review?.data?.rating >= 4.5 && review?.data?.rating < 5 ? (
        <span className="flex">
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStarHalf color="#de7921" size={parseInt(size)} />
        </span>
      ) : (
        <span className="flex">
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
          <IoIosStar color="#de7921" size={parseInt(size)} />{" "}
        </span>
      )}
    </div>
  );
};

export default Rating;
