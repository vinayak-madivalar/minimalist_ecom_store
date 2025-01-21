import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section className="py-16">
        <h1 className="text-center my-4 text-3xl md:text-4xl font-semibold">
          What We Offer!
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap justify-evenly items-center lg:mx-12">
          <div className="w-[28rem] flex justify-center items-center flex-col px-5 py-5 shadow-lg border rounded-sm border-b-2 border-b-blue-500 m-4">
            <img src="delivery-truck.png" alt="" className="w-10 h-10" />
            <h3 className="text-xl font-semibold my-2">Free Delivery</h3>
            <p className="text-center text-gray-500 font-medium">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself.
            </p>
          </div>
          <div className="w-[28rem] flex justify-center items-center flex-col px-5 py-5 shadow-lg border rounded-sm border-b-2 border-b-red-500 m-4">
            <img src="credit-card.png" alt="" className="w-10 h-10" />
            <h3 className="text-xl text-center font-semibold my-2">
              Secure Payments
            </h3>
            <p className="text-center text-gray-500 font-medium">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself.
            </p>
          </div>
          <div className="w-[28rem] flex justify-center items-center flex-col px-5 py-5 shadow-lg border rounded-sm border-b-2 border-b-green-500 m-4">
            <img src="shopping-cart.png" alt="" className="w-10 h-10" />
            <h3 className="text-xl font-semibold my-2">Free Returns</h3>
            <p className="text-center text-gray-500 font-medium">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself.
            </p>
          </div>
          <div className="w-[28rem] flex justify-center items-center flex-col px-5 py-5 shadow-lg border rounded-sm border-b-2 border-b-yellow-500 m-4">
            <img src="headset.png" alt="" className="w-10 h-10" />
            <h3 className="text-xl font-semibold my-2">24/7 Support</h3>
            <p className="text-center text-gray-500 font-medium">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself.
            </p>
          </div>
        </div>
      </section>
      <section id="newsletter" class="py-16 bg-gray-900 text-white">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Join Our Newsletter
            </h2>
            <p class="text-gray-300 mb-8">
              Subscribe to our newsletter and get 10% off your first purchase
              plus exclusive access to new arrivals and special offers.
            </p>

            <form class="max-w-xl mx-auto">
              <div class="flex flex-col md:flex-row gap-4">
                <div class="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    class="w-full px-6 py-4 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="bg-blue-600 text-white font-semibold px-8 py-4 rounded hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <p class="text-sm text-gray-400 mt-6">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>
      </section>
      <section id="testimonials" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p class="text-gray-700">
              Read about experiences from our happy customers
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gray-50 p-8 rounded-lg">
              <div class="flex items-center mb-6">
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt="Customer"
                  class="w-14 h-14 rounded-full"
                />
                <div class="ml-4">
                  <h3 class="font-semibold">Sarah Johnson</h3>
                  <div class="flex text-yellow-400">
                    <IoIosStar size={15} />
                    <IoIosStar size={15} />
                    <IoIosStar size={15} />
                    <IoIosStar size={15} />
                    <IoIosStar size={15} />
                  </div>
                </div>
              </div>
              <blockquote class="text-gray-700 font-sans">
                "The quality of the clothes is outstanding! I love how
                everything fits perfectly and the customer service was
                exceptional. Will definitely shop here again!"
              </blockquote>
            </div>

            <div class="bg-gray-50 p-8 rounded-lg">
              <div class="flex items-center mb-6">
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt="Customer"
                  class="w-14 h-14 rounded-full"
                />
                <div class="ml-4">
                  <h3 class="font-semibold">Michael Chen</h3>
                  <div class="flex text-yellow-400">
                    <IoIosStar size={15} />
                    <IoIosStar size={15} />
                    <IoIosStar size={15} />
                    <IoIosStar size={15} />
                    <IoIosStarHalf size={15} />
                  </div>
                </div>
              </div>
              <blockquote class="text-gray-700 font-sans">
                "Fast shipping and the clothes are exactly as pictured. The
                sizing guide was very helpful in choosing the right fit. Great
                experience overall!"
              </blockquote>
            </div>
            <div class="bg-gray-50 p-8 rounded-lg">
              <div class="flex items-center mb-6">
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt="Customer"
                  class="w-14 h-14 rounded-full"
                />
                <div class="ml-4">
                  <h3 class="font-semibold">Emma Wilson</h3>
                  <div class="flex text-yellow-400">
                    <IoIosStar size={15} />
                    <IoIosStar size={15} />
                    <IoIosStar size={15} />
                    <IoIosStar size={15} />
                  </div>
                </div>
              </div>
              <blockquote class="text-gray-700 font-sans">
                "I'm impressed by the attention to detail and the quality of the
                fabrics. The styles are trendy yet timeless. This has become my
                go-to fashion store!"
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
