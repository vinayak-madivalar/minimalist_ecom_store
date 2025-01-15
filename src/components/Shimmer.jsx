import React from "react";

const Shimmer = () => {
  return (
    <div className="flex mx-12 items-center gap-10">
      <div className="w-60 h-80 bg-gray-100">
        <div className="animate-pulse flex flex-col gap-4">
          <div className="w-60 h-60 bg-gray-200"></div>
          <div className="h-4 bg-gray-200 rounded-md"></div>
          <div className="h-4 bg-gray-200 rounded-md"></div>
          <div className="h-4 bg-gray-200 rounded-md"></div>
        </div>
      </div>
      <div className="w-60 h-80 bg-gray-100">
        <div className="animate-pulse flex flex-col gap-4">
          <div className="w-60 h-60 bg-gray-200"></div>
          <div className="h-4 bg-gray-200 rounded-md"></div>
          <div className="h-4 bg-gray-200 rounded-md"></div>
          <div className="h-4 bg-gray-200 rounded-md"></div>
        </div>
      </div>
      <div className="w-60 h-80 bg-gray-100">
        <div className="animate-pulse flex flex-col gap-4">
          <div className="w-60 h-60 bg-gray-200"></div>
          <div className="h-4 bg-gray-200 rounded-md"></div>
          <div className="h-4 bg-gray-200 rounded-md"></div>
          <div className="h-4 bg-gray-200 rounded-md"></div>
        </div>
      </div>
      <div className="w-60 h-80 bg-gray-100">
        <div className="animate-pulse flex flex-col gap-4">
          <div className="w-60 h-60 bg-gray-200"></div>
          <div className="h-4 bg-gray-200 rounded-md"></div>
          <div className="h-4 bg-gray-200 rounded-md"></div>
          <div className="h-4 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
