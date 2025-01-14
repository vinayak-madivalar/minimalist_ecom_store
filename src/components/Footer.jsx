import Logo from "./Logo";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="flex items-start flex-wrap justify-between gap-4 px-4 lg:px-16 bg-gray-100 mt-8 py-8">
        <div className="flex flex-wrap gap-4 lg:gap-20">
          <div>
            <Logo />
            <h2 className="pt-4 font-semibold">About Us</h2>
            <p className="w-60 text-gray-600 text-sm mb-3 font-sans">
              We bring you the best in fashion, electronics, and home essentials
              at unbeatable prices, with top-notch service and fast shipping.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Explore</h2>
            <p className="text-gray-600 text-sm font-medium mb-3 hover:underline hover:cursor-pointer hover:text-black">
              Fashion
            </p>
            <p className=" text-gray-600 text-sm font-medium mb-3 hover:underline hover:cursor-pointer hover:text-black">
              Women
            </p>
            <p className=" text-gray-600 text-sm font-medium mb-3 hover:underline hover:cursor-pointer hover:text-black">
              Furniture
            </p>
            <p className=" text-gray-600 text-sm font-medium mb-3 hover:underline hover:cursor-pointer hover:text-black">
              Shoes
            </p>
            <p className="text-gray-600 text-sm font-medium mb-3 hover:underline hover:cursor-pointer hover:text-black">
              Topwear
            </p>
            <p className="text-gray-600 text-sm font-medium mb-3 hover:underline hover:cursor-pointer hover:text-black">
              Brands
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-semibold">Company</h2>
          <p className="text-gray-600 text-sm mb-3 font-medium hover:underline hover:cursor-pointer hover:text-black">
            About Us
          </p>
          <p className=" text-gray-600 text-sm mb-3 font-medium hover:underline hover:cursor-pointer hover:text-black">
            Contact Us
          </p>
          <p className="text-gray-600 text-sm mb-3 font-medium hover:underline hover:cursor-pointer hover:text-black">
            FAQ
          </p>
          <p className="text-gray-600 text-sm mb-3 font-medium hover:underline hover:cursor-pointer hover:text-black">
            Privacy
          </p>
          <p className="text-gray-600 text-sm mb-3 font-medium hover:underline hover:cursor-pointer hover:text-black">
            Terms
          </p>
          <p className=" text-gray-600 text-sm mb-3 font-medium hover:underline hover:cursor-pointer hover:text-black">
            Complaints
          </p>
        </div>
        <div>
          <h2 className="font-semibold">Follow Us</h2>
          <div className="flex gap-2 mb-4">
            <span className="circle bg-white hover:scale-110">
              <FaFacebook size={20} color="blue" />
            </span>
            <span className="circle bg-white hover:scale-110">
              <FaXTwitter size={20} />
            </span>
            <span className="circle bg-white hover:scale-110">
              <FaLinkedin size={20} color="blue" />
            </span>
            <span className="circle bg-white hover:scale-110">
              <FaYoutube size={20} color="red" />
            </span>
            <span className="circle bg-white hover:scale-110">
              <FaInstagram size={20} color="pink" />
            </span>
          </div>
          <h2 className="mb-1 font-semibold">Support</h2>
          <p className="text-gray-600 mb-3 text-base">support@example.com</p>
          <h2 className="mb-1 font-semibold">Toll Free</h2>
          <p className="text-gray-600 mb-3 text-base">1800- 8xx 2xx</p>
        </div>
      </div>
      <div className="flex items-center justify-center py-4 border bg-gray-100">
        <p className="text-gray-600 text-sm mb-0">
          &copy; 2024 Minimalist_Store | All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
