import Logo from "./Logo";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaCcDiscover,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" class="bg-gray-900 text-gray-300 mt-8">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div class="mb-4 ">
              <Logo />
            </div>
            <p class="text-gray-400 mb-4">
              Your one-stop destination for all your shopping needs. Quality
              products, competitive prices, and exceptional service.
            </p>
            <div class="flex space-x-4">
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook size={20} color="gray" />
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <FaXTwitter size={20} color="gray" />
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} color="gray" />
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={20} color="gray" />
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="/aboutus"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contactus"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-white mb-4">
              Customer Service
            </h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  Shipping Information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  Support Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3">
                <i class="fas fa-map-marker-alt mt-1"></i>
                <span>123 Commerce Street, New York, NY 10001, USA</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-phone-alt"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-envelope"></i>
                <span>support@minimaliststore.com</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-clock"></i>
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800">
        <div class="container mx-auto px-4 py-6">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Minimalist Store. All rights reserved.
            </div>
            <div class="flex items-center space-x-4">
              <FaCcVisa size={30} color="silver" />
              <FaCcMastercard size={30} color="silver" />
              <FaCcAmex size={30} color="silver" />
              <FaCcPaypal size={30} color="silver" />
              <FaCcDiscover size={30} color="silver" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div className="flex items-start flex-wrap justify-between gap-4 px-4 lg:px-16 bg-gray-100 mt-8 py-8">
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
      </div> */
}
