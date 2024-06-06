import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

const HamBurgurMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <section className=" flex lg:hidden">
        <div className="" onClick={handleToggle}>
          <RxHamburgerMenu size={25} />
        </div>

        <div className={isMenuOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes size={30} />
          </div>
          <ul
            className="flex flex-col items-center justify-between min-h-[250px]"
            onClick={closeMenu}
          >
            <li className="border-b border-gray-400 text-2xl font-rubik font-medium my-8 ">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="border-b border-gray-400 text-2xl font-rubik font-medium my-8 ">
              <Link href={"/products"}>Products</Link>
            </li>
            <li className="border-b border-gray-400 text-2xl font-rubik font-medium my-8 ">
              <Link href={"/aboutus"}>Aboutus</Link>
            </li>
            <li className="border-b border-gray-400 text-2xl font-rubik font-medium my-8 ">
              <Link href={"/contactus"}>Contactus</Link>
            </li>
          </ul>
        </div>
      </section>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: fixed;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default HamBurgurMenu;
