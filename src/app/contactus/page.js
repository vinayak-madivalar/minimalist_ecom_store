import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center my-8">Contact Us</h1>
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-start gap-8 lg:mx-12">
        <div className="w-3/4 lg:w-3/5">
          <form className="flex flex-col ">
            <label className="mb-2 text-lg font-semibold ">
              Full Name <b>*</b>
            </label>
            <input
              type="text"
              className="mb-4 p-2 bg-gray-100"
              placeholder="e.g: 'John Doe'"
            />
            <label className="mb-2 text-xl font-semibold ">
              Email <b>*</b>
            </label>
            <input
              type="email"
              className="mb-4 p-2 bg-gray-100"
              placeholder="youremail@example.com"
            />
            <label className="mb-2 text-xl font-semibold ">
              Ask Your Doubts <b>*</b>
            </label>
            <textarea
              className="h-28 mb-4 p-2 bg-gray-100"
              placeholder="write here..."
            />
            <button
              type="submit"
              className="border py-4 font-semibold bg-black text-white"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="lg:w-2/5 p-4">
          <div className="mb-4">
            <h5 className="text-xl font-semibold mb-1">Address</h5>
            <p className="text-gray-500 font-medium">
              123 Street Name, City, India.
            </p>
          </div>
          <div className=" mb-4">
            <h5 className="text-xl font-semibold mb-1">Phone</h5>
            <p className="text-gray-500 font-medium mb-1">
              Toll Free (123) 472-796
            </p>
            <p className="text-gray-500 font-medium">Mobile : +91-9910XXXXXX</p>
          </div>
          <div className=" mb-4">
            <h5 className="text-xl font-semibold mb-1">Email</h5>
            <p className="text-gray-500 font-medium">mail@example.com</p>
          </div>
          <div className=" ">
            <h5 className="text-xl font-semibold mb-1">Working Days</h5>
            <p className="text-gray-500 font-medium">
              Mon - FRI / 9:30 AM - 6:30 PM
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
