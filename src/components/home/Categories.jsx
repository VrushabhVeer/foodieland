import React from "react";
import Image from "next/image";
import breakfast from "../../assets/icons/breakfast.svg";
import vegan from "../../assets/icons/vegan.svg";
import meat from "../../assets/icons/meat.svg";
import chocolate from "../../assets/icons/chocolate.svg";
import lunch from "../../assets/icons/lunch.svg";
import dessert from "../../assets/icons/dessert.svg";

const Categories = () => {
  return (
    <div className="w-[90%] mx-auto mt-20 md:mt-40">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-2xl md:text-4xl">Categories</h1>

        <div className="bg-[#E7FAFE] rounded-2xl px-6 py-3 font-semibold">
          View All Categories
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center mt-16">
        <div className="w-full bg-gradient-to-b from-white to-[#7082461A] rounded-2xl py-6">
          <div className="flex justify-center">
            <Image
              src={breakfast}
              alt="breakfast-icon"
              width={100}
              height={100}
            />
          </div>
          <h3 className="font-semibold text-lg mt-10 text-center">Breakfast</h3>
        </div>

        <div className="w-full bg-gradient-to-b from-white to-[#6CC63F1A] rounded-2xl py-6">
          <div className="flex justify-center">
            <Image src={dessert} alt="dessert-icon" width={100} height={100} />
          </div>
          <h3 className="font-semibold text-lg mt-10 text-center">Dessert</h3>
        </div>

        <div className="w-full bg-gradient-to-b from-white to-[#CC261B1A] rounded-2xl py-6">
          <div className="flex justify-center">
            <Image src={vegan} alt="vegan-icon" width={100} height={100} />
          </div>
          <h3 className="font-semibold text-lg mt-10 text-center">Vegan</h3>
        </div>

        <div className="w-full bg-gradient-to-b from-white to-[#F09E001A] rounded-2xl py-6">
          <div className="flex justify-center">
            <Image src={lunch} alt="lunch-iocn" width={100} height={100} />
          </div>
          <h3 className="font-semibold text-lg mt-10 text-center">Lunch</h3>
        </div>

        <div className="w-full bg-gradient-to-b from-white to-[#0000000D] rounded-2xl py-6">
          <div className="flex justify-center">
            <Image src={meat} alt="meat-icon" width={100} height={100} />
          </div>
          <h3 className="font-semibold text-lg mt-10 text-center">Meat</h3>
        </div>

        <div className="w-full bg-gradient-to-b from-white to-[#0000000D] rounded-2xl py-6">
          <div className="flex justify-center">
            <Image
              src={chocolate}
              alt="chocolate-icon"
              width={100}
              height={100}
            />
          </div>
          <h3 className="font-semibold text-lg mt-10 text-center">Chocolate</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
