import React from "react";
import reciepe1 from "../../assets/images/reciepe1.png";
import reciepe2 from "../../assets/images/reciepe2.png";
import reciepe3 from "../../assets/images/reciepe3.png";
import reciepe4 from "../../assets/images/reciepe4.png";
import reciepe5 from "../../assets/images/reciepe5.png";
import reciepe6 from "../../assets/images/reciepe6.png";
import reciepe7 from "../../assets/images/reciepe7.png";
import reciepe0 from "../../assets/images/reciepe0.png";
import heart from "../../assets/icons/heart.png";
import timerIcon from "../../assets/icons/timer.svg";
import forkKnifeIcon from "../../assets/icons/forkKnife.svg";
import RecipeCard1 from "./RecipeCard1";

const recipes = [
  {
    id: 1,
    image: reciepe1,
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    time: "30 Minutes",
  },
  {
    id: 2,
    image: reciepe2,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
  },
  {
    id: 3,
    image: reciepe3,
    title: "Healthy Japanese Fried Rice with Asparagus",
    time: "30 Minutes",
  },
  {
    id: 4,
    image: reciepe4,
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    time: "30 Minutes",
  },
  {
    id: 5,
    image: reciepe5,
    title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    time: "30 Minutes",
  },
  {
    id: 6,
    image: reciepe6,
    title: "Barbeque Spicy Sandwiches with Chips",
    time: "30 Minutes",
  },
  {
    id: 7,
    image: reciepe7,
    title: "Firecracker Vegan Lettuce Wraps - Spicy!",
    time: "30 Minutes",
  },
  {
    id: 8,
    image: reciepe0,
    title: "Chicken Ramen Soup with Mushroom ",
    time: "30 Minutes",
  },
];

const RecipeOfDay = () => {
  return (
    <div className="w-[90%] mx-auto mt-20 md:mt-40">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="font-semibold text-2xl md:text-4xl">
          Try this delicious recipe to make your day
        </h1>
        <p className="mt-4 text-[#00000099]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {recipes.map((recipe) => (
          <RecipeCard1
            key={recipe.id}
            image={recipe.image}
            title={recipe.title}
            time={recipe.time}
            category={recipe.category}
            heartIcon={heart}
            timerIcon={timerIcon}
            forkKnifeIcon={forkKnifeIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeOfDay;
