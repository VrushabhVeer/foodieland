import Image from "next/image";
import React from "react";

const RecipeCard1 = ({
  image,
  title,
  time,
  category,
  heartIcon,
  timerIcon,
  forkKnifeIcon,
}) => {
  return (
    <div className="w-full">
      <div className="relative">
        <Image
          src={image}
          alt="recipe-image"
          width={368}
          height={250}
          className="w-full rounded-2xl"
        />
        <div className="p-3 rounded-full bg-white absolute top-2 right-2">
          <Image src={heartIcon} alt="heart" width={20} height={18} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-xl line-clamp-2">{title}</h3>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Image src={timerIcon} alt="timer-icon" width={24} height={24} />
            {time}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Image
              src={forkKnifeIcon}
              alt="forkknife-icon"
              width={24}
              height={24}
            />
            {category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard1;
