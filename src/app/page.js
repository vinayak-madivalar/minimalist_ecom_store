import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div>
        <div className="pt-8 pb-8">
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
        </div>
      </div>
      <Footer />
    </>
  );
}
