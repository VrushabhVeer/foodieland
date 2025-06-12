import React from "react";
import Image from "next/image";
import RecipeCard from "./RecipeCard";
import timer from "../../assets/icons/timer.svg";
import forkKnife from "../../assets/icons/forkKnife.svg";
import reciepe0 from "../../assets/images/reciepe0.png";
import reciepe1 from "../../assets/images/reciepe1.png";
import reciepe2 from "../../assets/images/reciepe2.png";
import reciepe3 from "../../assets/images/reciepe3.png";
import reciepe4 from "../../assets/images/reciepe4.png";
import reciepe5 from "../../assets/images/reciepe5.png";
import reciepe6 from "../../assets/images/reciepe6.png";
import reciepe7 from "../../assets/images/reciepe7.png";
import ads from "../../assets/images/ads.png";

const Recipes = () => {
  const recipes = [
    {
      img: reciepe0,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      time: "30 Minutes",
      type: "Chicken",
    },
    {
      img: reciepe1,
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      time: "30 Minutes",
      type: "Chicken",
    },
    {
      img: reciepe2,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      time: "30 Minutes",
      type: "Chicken",
    },
    {
      img: reciepe3,
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      time: "30 Minutes",
      type: "Chicken",
    },
    {
      img: reciepe4,
      title: "Chicken Meatballs with Cream Cheese",
      time: "30 Minutes",
      type: "Chicken",
    },
    {
      img: reciepe5,
      title: "Fruity Pancake with Orange & Blueberry",
      time: "30 Minutes",
      type: "Chicken",
    },
    {
      img: reciepe6,
      title: "The Best Easy One Pot Chicken and Rice",
      time: "30 Minutes",
      type: "Chicken",
    },
    {
      img: reciepe7,
      title: "The Creamiest Creamy Chicken and Bacon Pasta",
      time: "30 Minutes",
      type: "Chicken",
    },
  ];

  const items = [...recipes];
  items.splice(5, 0, { isAd: true });

  return (
    <div className="w-[90%] mx-auto mt-20 md:mt-40">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="font-semibold text-2xl md:text-4xl">
          Simple and tasty recipes
        </h1>
        <p className="mt-4 text-[#00000099]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>

      <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, index) =>
          item.isAd ? (
            <div key="ad" className="w-full overflow-hidden">
              <Image
                src={ads}
                alt="Advertisement"
                width={368}
                height={200}
                className="w-full object-cover"
              />
            </div>
          ) : (
            <RecipeCard
              key={index}
              recipe={item}
              timerIcon={timer}
              forkKnifeIcon={forkKnife}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Recipes;
