import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="w-[90%] mx-auto mt-10 md:mt-20 py-10">
        {/* top */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-10">
          <div>
            <Link href="/">
              <h2 className="text-xl md:text-2xl font-lobster">
                Foodieland<span className="text-[#FF7426]">.</span>
              </h2>
            </Link>
            
            <p className="mt-2 text-[#00000099]">
              Lorem ipsum dolor sit amet, consectetuipisicing elit
            </p>
          </div>

          <nav className="flex flex-row items-center space-x-6 md:space-x-10 font-medium">
            <Link href="">Recipes</Link>
            <Link href="">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="">About us</Link>
          </nav>
        </div>

        {/* bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 md:mt-10 border-t border-slate-200 pt-2 md:pt-10 gap-4">
          <div></div>
          <div>
            <p className="text-md text-[#00000099]">
              © 2025 Foodieland. made by{" "}
              <span className="text-[#FF7426]">Vrushabh Veer</span>
            </p>
          </div>
          <div className="flex items-center space-x-4 md:space-x-8">
            <FaFacebookF size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
