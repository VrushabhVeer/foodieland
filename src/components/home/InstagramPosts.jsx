import React from "react";
import Image from "next/image";
import post from "../../assets/images/post.svg";
import post1 from "../../assets/images/post1.svg";
import post2 from "../../assets/images/post2.svg";
import post3 from "../../assets/images/post3.svg";
import { FaInstagram } from "react-icons/fa";

const InstagramPosts = () => {
  return (
    <div className="w-full mt-20 md:mt-40 pb-10 md:pb-20 bg-gradient-to-b from-white to-[#E7F9FD]">
      <div className="w-[90%] mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="font-semibold text-2xl md:text-4xl">
            Simple and tasty recipes
          </h1>
          <p className="mt-4 text-[#00000099]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>

        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image
              src={post}
              alt="Instagram Post 1"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src={post1}
              alt="Instagram Post 1"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src={post2}
              alt="Instagram Post 1"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src={post3}
              alt="Instagram Post 1"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 flex items-center justify-center">
        <button className="flex items-center gap-2 px-8 py-4 text-sm bg-black rounded-2xl cursor-pointer text-white">
          Visit Our Instagram
          <FaInstagram className="cursor-pointer" size={20} />
        </button>
      </div>
    </div>
  );
};

export default InstagramPosts;
