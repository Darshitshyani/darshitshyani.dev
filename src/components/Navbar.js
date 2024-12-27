import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-black border-b-2 border-primary text-text p-4 shadow-md z-50 h-[60px]">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-primary font-bold text-lg">
          Darshit Shyani
        </a>
        <div className="hidden space-x-4 font-semibold sm:hidden lg:flex md:flex xl:flex">
          <a href="#about" className="hover:text-primary">
            About
          </a>
          <a href="#projects" className="hover:text-primary">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
        </div>
        <div
          className="flex flex-col space-x-4 font-semibold sm:flex  lg:hidden md:hidden xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </div>
      </div>
      {isOpen && (
        <div
          className="res-nav w-full absolute top-0 right-0 h-screen  "
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative w-[200px] h-full  right-0 flex flex-col items-center bg-opacity-90 animate-slide-in  bg-black">
            <div className="border-b border-primary w-full text-center h-[59px] flex items-center justify-center">
              <h1 className="font-bold text-[16px]">DARSHIT SHYANI</h1>
            </div>
            <ul className="flex flex-col space-y-4 p-4 justify-start items-start text-[16px]">
              <li className={`flex items-start gap-2  animate-slide-in `}>
                <span className="text-primary font-bold">➤</span>
                <a href="#about" className="hover:text-primary">
                  About
                </a>
              </li>
              <li className={`flex items-start gap-2  animate-slide-in `}>
                <span className="text-primary font-bold">➤</span>
                <a href="#projects" className="hover:text-primary">
                  Projects
                </a>
              </li>
              <li className={`flex items-start gap-2  animate-slide-in `}>
                <span className="text-primary font-bold">➤</span>
                <a href="#contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
