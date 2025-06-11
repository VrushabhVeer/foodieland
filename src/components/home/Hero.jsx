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
    <section className="w-[90%] mx-auto flex flex-col md:flex-col lg:flex-row items-stretch gap-1 py-4 md:py-8">
      {/* left div */}
      <div className="w-full bg-[#E7FAFE] p-10 md:rounded-l-4xl flex flex-col justify-between">
        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm w-fit">
          <Image
            src={hotRecipesIcon}
            alt="Hot Recipes Icon"
            width={24}
            height={24}
          />
          <p className="font-semibold text-sm">Hot Recipes</p>
        </div>

        <div className="mt-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            Spicy delicious chicken wings
          </h1>
          <p className="mt-6 text-[#00000099] max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <button className="flex items-center gap-2 px-6 py-3 bg-[#0000000D] rounded-full text-black">
            <Image src={timer} alt="timer-icon" width={24} height={24} />
            30 Minutes
          </button>

          <button className="flex items-center gap-2 px-6 py-3 bg-[#0000000D] rounded-full text-black">
            <Image
              src={forkKnife}
              alt="forkknife-icon"
              width={24}
              height={24}
            />
            Chicken
          </button>
        </div>

        <div className="flex items-center justify-between mt-20">
          <div className="flex items-center gap-2">
            <div className="rounded-full h-[50px] w-[50px]">
              <Image src={john} alt="john-icon" width={50} height={50} />
            </div>
            <div>
              <p className="font-medium">John Smith</p>
              <p className="text-sm text-[#00000099]">15 March 2022</p>
            </div>
          </div>

          <button className="flex items-center gap-2 px-8 py-4 text-sm bg-black rounded-2xl cursor-pointer text-white">
            View Recipes
            <Image
              src={playCircle}
              alt="playCircle-icon"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* right img */}
      <div className="w-full relative">
        <Image
          src={heroImage}
          alt="hero-image"
          className="w-full h-full object-cover md:rounded-r-4xl"
          priority
        />
        <div className="absolute md:top-10 md:-left-10 -top-5 left-5">
          <Image src={badge} alt="badge-icon" width={150} height={150} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
