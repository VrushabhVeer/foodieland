"use client";
import React, { use } from "react";
import Image from "next/image";
import heart from "../../assets/icons/heart.png";

const RecipeCard = ({ recipe, timerIcon, forkKnifeIcon }) => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-[#E7F9FD] rounded-2xl p-3">
      <div className="relative">
        <Image
          src={recipe.img}
          alt={recipe.title}
          width={368}
          height={250}
          className="w-full"
        />

        <div className="p-3 rounded-full bg-white absolute top-2 right-2">
          <Image src={heart} alt="heart" width={20} height={18} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-xl">{recipe.title}</h3>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Image src={timerIcon} alt="timer-icon" width={24} height={24} />
            {recipe.time}
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={forkKnifeIcon}
              alt="forkknife-icon"
              width={24}
              height={24}
            />
            {recipe.type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
