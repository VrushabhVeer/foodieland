import React from "react";
import Image from "next/image";
import chefImage from "../../assets/images/chefImage.svg";

const ChefSection = () => {
  return (
    <section className="w-[90%] mx-auto flex flex-col md:flex-col lg:flex-row items-center gap-8 py-4 md:py-8 mt-20 md:mt-40">
      <div className="w-full">
        <h1 className="text-2xl md:text-4xl font-semibold text-black">
          Everyone can be a chef in their own kitchen
        </h1>
        <p className="mt-3 md:mt-6 text-[#00000099] max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <button className="flex items-center gap-2 px-8 py-4 text-sm bg-black rounded-2xl cursor-pointer text-white mt-10 md:mt-20">
          Learn More
        </button>
      </div>

      <div className="w-full">
        <Image
          src={chefImage}
          alt="chef-image"
          className="w-full h-full object-cover md:rounded-r-2xl"
          priority
        />
      </div>
    </section>
  );
};

export default ChefSection;
