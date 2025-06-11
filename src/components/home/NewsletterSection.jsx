import React from "react";
import Image from "next/image";
import newsletterLeft from "../../assets/images/newsletterLeft.svg";
import newsletterRight from "../../assets/images/newsletterRight.svg";

const NewsletterSection = () => {
  return (
    <div className="bg-[#E7F9FD] rounded-4xl p-6 md:p-16 mt-20 md:mt-40 w-[90%] mx-auto relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-48 md:w-64 lg:w-80">
        <Image
          src={newsletterLeft}
          alt="recipe-image"
          width={320}
          height={250}
          className="rounded-2xl"
        />
      </div>

      <div className="absolute right-0 bottom-0 w-48 md:w-64 lg:w-80">
        <Image
          src={newsletterRight}
          alt="recipe-image"
          width={320}
          height={250}
          className="rounded-2xl"
        />
      </div>

      <div className="relative z-10">
        <div className="text-center md:max-w-xl mx-auto">
          <h1 className="font-semibold text-2xl md:text-4xl">
            Deliciousness to your inbox
          </h1>
          <p className="mt-4 text-[#00000099]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>

        <div className="md:max-w-xl mx-auto bg-white mt-8 md:mt-16 flex flex-col md:flex-row md:items-center justify-between gap-4 p-2 rounded-2xl relative z-10">
          <input
            type="text"
            placeholder="Your email address..."
            className="outline-none md:ml-6"
          />
          <button className="flex items-center gap-2 px-8 py-4 text-sm bg-black rounded-2xl cursor-pointer text-white w-full md:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
