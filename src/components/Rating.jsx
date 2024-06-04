import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const Rating = (review) => {
  return (
    <div>
      {review?.data?.rating <= 2 ? (
        <span className="flex">
          <TiStarFullOutline color="gold" size={20} />{" "}
          <TiStarFullOutline color="gold" size={20} />
        </span>
      ) : review?.data?.rating < 4 ? (
        <span className="flex">
          <TiStarFullOutline color="gold" size={20} />{" "}
          <TiStarFullOutline color="gold" size={20} />{" "}
          <TiStarFullOutline color="gold" size={20} />
        </span>
      ) : review?.data?.rating >= 4 && review?.data?.rating <= 4.5 ? (
        <span className="flex">
          <TiStarFullOutline color="gold" size={20} />{" "}
          <TiStarFullOutline color="gold" size={20} />{" "}
          <TiStarFullOutline color="gold" size={20} />{" "}
          <TiStarFullOutline color="gold" size={20} />
        </span>
      ) : (
        <span className="flex">
          <TiStarFullOutline color="gold" size={20} />{" "}
          <TiStarFullOutline color="gold" size={20} />{" "}
          <TiStarFullOutline color="gold" size={20} />{" "}
          <TiStarFullOutline color="gold" size={20} />{" "}
          <TiStarFullOutline color="gold" size={20} />
        </span>
      )}
    </div>
  );
};

export default Rating;
