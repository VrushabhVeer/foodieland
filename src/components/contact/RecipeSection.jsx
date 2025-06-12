import React from "react";
import reciepe1 from "../../assets/images/reciepe1.png";
import reciepe2 from "../../assets/images/reciepe2.png";
import reciepe3 from "../../assets/images/reciepe3.png";
import reciepe4 from "../../assets/images/reciepe4.png";
import heart from "../../assets/icons/heart.png";
import timerIcon from "../../assets/icons/timer.svg";
import forkKnifeIcon from "../../assets/icons/forkKnife.svg";
import RecipeCard1 from "../home/RecipeCard1";

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
];

const RecipeSection = () => {
  return (
    <div className="w-[90%] mx-auto mt-20 md:mt-40">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="font-semibold text-2xl md:text-4xl">
          Check out the delicious recipe
        </h1>
      </div>

      <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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

export default RecipeSection;
