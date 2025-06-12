import React from "react";
import Image from "next/image";
import heroImage from "../../assets/images/heroImage.svg";
import hotRecipesIcon from "../../assets/icons/hotRecipesIcon.svg";
import timer from "../../assets/icons/timer.svg";
import forkKnife from "../../assets/icons/forkKnife.svg";
import john from "../../assets/icons/john.svg";
import playCircle from "../../assets/icons/playCircle.svg";
import badge from "../../assets/icons/badge.svg";

const Hero = () => {
  return (
    <section className="w-[90%] mx-auto flex flex-col lg:flex-row items-stretch gap-2 py-4 md:py-8">
      {/* left div */}
      <div className="w-full bg-[#E7FAFE] p-6 sm:p-8 md:p-10 rounded-t-2xl lg:rounded-l-4xl lg:rounded-tr-none flex flex-col justify-between">
        <div className="flex items-center gap-3 bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-sm w-fit">
          <Image
            src={hotRecipesIcon}
            alt="Hot Recipes Icon"
            width={20}
            height={20}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          />
          <p className="font-semibold text-xs sm:text-sm">Hot Recipes</p>
        </div>

        <div className="mt-6 sm:mt-8">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold">
            Spicy delicious chicken wings
          </h1>
          <p className="mt-4 sm:mt-6 text-[#00000099] text-sm sm:text-base max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 bg-[#0000000D] rounded-full text-black text-xs sm:text-sm">
            <Image
              src={timer}
              alt="timer-icon"
              width={16}
              height={16}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
            30 Minutes
          </button>

          <button className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 bg-[#0000000D] rounded-full text-black text-xs sm:text-sm">
            <Image
              src={forkKnife}
              alt="forkknife-icon"
              width={16}
              height={16}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
            Chicken
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-10 sm:mt-12 md:mt-16 lg:mt-20 gap-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
              <Image
                src={john}
                alt="john-icon"
                width={48}
                height={48}
                className="w-full h-full"
              />
            </div>
            <div>
              <p className="font-medium text-sm sm:text-base">John Smith</p>
              <p className="text-sm sm:text-sm text-[#00000099]">
                15 March 2022
              </p>
            </div>
          </div>

          <button className="flex items-center gap-2 px-4 py-3 md:px-8 md:py-4 text-sm bg-black rounded-xl md:rounded-2xl cursor-pointer text-white w-full sm:w-auto justify-center">
            View Recipes
            <Image
              src={playCircle}
              alt="playCircle-icon"
              width={16}
              height={16}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
          </button>
        </div>
      </div>

      {/* right img */}
      <div className="w-full relative">
        <Image
          src={heroImage}
          alt="hero-image"
          className="w-full h-full object-cover rounded-b-2xl lg:rounded-r-4xl lg:rounded-bl-none"
          priority
        />
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:-left-10">
          <Image
            src={badge}
            alt="badge-icon"
            width={100}
            height={100}
            className="w-16 h-16 w-24 h-24 lg:w-32 lg:h-32"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
