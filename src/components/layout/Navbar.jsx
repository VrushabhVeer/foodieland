"use client";
import { TbMenu2, TbX } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* logo */}
          <div>
            <Link href="/" className="flex items-center">
              <h2 className="text-xl md:text-2xl font-lobster">
                Foodieland<span className="text-[#FF7426]">.</span>
              </h2>
            </Link>
          </div>

          {/* desktop navigations */}
          <nav className="hidden md:flex items-center space-x-10 font-medium">
            <Link href="/">Home</Link>
            <Link href="">Recipes</Link>
            <Link href="">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="">About us</Link>
          </nav>

          {/* icons desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <FaFacebookF size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
          </div>

          {/* mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-100 focus:outline-none cursor-pointer"
            onClick={toggleMenu}
            aria-expanded={isOpen}
          >
            {isOpen ? <TbX size={24} /> : <TbMenu2 size={24} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="w-[90%] mx-auto pb-6 space-y-3 bg-white border-b border-slate-200">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="" className="block">
            Recipes
          </Link>
          <Link href="" className="block">
            Blog
          </Link>
          <Link href="/contact" className="block">
            Contact
          </Link>
          <Link href="" className="block">
            About us
          </Link>

          <div className="flex items-center space-x-6 mt-6">
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaTwitter className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
