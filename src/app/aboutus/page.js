import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center gap-8 mx-20 my-8">
        <div className="w-1/2">
          <h3 className="text-3xl font-semibold mb-4">Our Story</h3>
          <p className="mb-3 text-gray-500 font-sans ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p className="mb-3 text-gray-500 font-sans">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure.
          </p>
          <p className="mb-3 text-gray-500 font-sans">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College.
          </p>
        </div>
        <div className="w-1/2">
          <img
            src="https://images.pexels.com/photos/7679877/pexels-photo-7679877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center items-center py-8">
        <h3 className="text-3xl font-semibold">Why Choose Us</h3>
      </div>
      <div className="flex gap-8 mx-20">
        <div className=" w-1/3 border border-black px-6 py-4">
          <img src="delivery.png" width="60" alt="delivery truck" />
          <h5 className="text-xl font-semibold my-2">Free Shipping</h5>
          <p className="w-72 text-gray-500 font-sans">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industr in some form.
          </p>
        </div>
        <div className="w-1/3 border border-black px-6 py-4">
          <img src="money-bag.png" width="60" alt="money-bag" />
          <h5 className="text-xl font-semibold my-2">100% Back Gaurantee</h5>
          <p className="w-72 text-gray-500 font-sans">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industr in some form.
          </p>
        </div>
        <div className="w-1/3 border border-black px-6 py-4">
          <img src="headphones.png" width="60" alt="headphones" />
          <h5 className="text-xl font-semibold my-2">Online Support 24/7</h5>
          <p className="w-72 text-gray-500 font-sans">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industr in some form.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col bg-bgimg py-16 bg-center my-12">
        <h2 className="text-white text-3xl text-center font-semibold">
          Get Latest Update <br /> Subscribe to Our Newslatter
        </h2>
        <input
          type="text"
          className="pl-12 pr-60 py-4 border mb-4 bg-transparent text-white text-lg"
          placeholder="Enter your email"
        />
        <button className="py-4 px-52 border text-sm font-semibold bg-white text-black uppercase">
          Subscribe
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
