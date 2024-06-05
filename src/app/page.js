import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div>
        <h1 className="text-center my-4 font-semibold">What We Offer!</h1>
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

        <div className="flex justify-center items-center flex-col bg-bgimg py-16 bg-center my-8">
          <div className="flex flex-col mx-4">
            <h2 className="text-white text-3xl text-center font-semibold">
              Get Latest Update <br /> Subscribe to Our Newslatter
            </h2>
            <input
              type="text"
              className="pl-8 py-4 border mb-4 bg-transparent text-white text-lg"
              placeholder="Enter your email"
            />
            <button className="py-4 border text-sm font-semibold bg-white text-black uppercase">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
