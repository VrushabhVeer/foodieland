import Image from "next/image";
import React from "react";
import chefImage2 from "../../assets/images/chefImage2.svg";

const FormSection = () => {
  return (
    <div className="w-[90%] mx-auto mt-10 md:mt-20">
      <h1 className="text-4xl md:text-6xl font-semibold text-center">
        Contact us
      </h1>

      <div className="flex items-center justify-between mt-16 flex-col md:flex-row">
        <div className="w-full md:w-1/2 hidden md:block">
          <Image src={chefImage2} alt="Contact Form" width={400} height={472} />
        </div>

        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label
                htmlFor=""
                className="uppercase mb-1 text-[12px] text-[#00000099] tracking-wide"
              >
                NAME
              </label>
              <input
                type="text"
                placeholder="Enter your name..."
                className="w-full mt-1 text-sm rounded-2xl border border-slate-200 px-4 py-4"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor=""
                className="uppercase mb-1 text-[12px] text-[#00000099] tracking-wide"
              >
                emAIL aDDRESS
              </label>
              <input
                type="text"
                placeholder="Your email address..."
                className="w-full mt-1 text-sm rounded-2xl border border-slate-200 px-4 py-4"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mt-8">
            <div className="w-full">
              <label
                htmlFor=""
                className="uppercase mb-1 text-[12px] text-[#00000099] tracking-wide"
              >
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject..."
                className="w-full mt-1 text-sm rounded-2xl border border-slate-200 px-4 py-4"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor=""
                className="uppercase mb-1 text-[12px] text-[#00000099] tracking-wide"
              >
                ENquiry type
              </label>
              <input
                type="text"
                placeholder="Advertising"
                className="w-full mt-1 text-sm rounded-2xl border border-slate-200 px-4 py-4"
              />
            </div>
          </div>

          <div className="mt-8">
            <label
              htmlr=""
              className="uppercase mb-1 text-[12px] text-[#00000099] tracking-wide"
            >
              Message
            </label>
            <textarea
              placeholder="Enter your messages..."
              className="w-full mt-1 text-sm rounded-2xl border border-slate-200 px-4 py-4"
              rows="5"
            />
          </div>
          <button className="flex items-center gap-2 px-8 py-4 text-sm bg-black rounded-2xl cursor-pointer text-white mt-8 md:mt-10">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
