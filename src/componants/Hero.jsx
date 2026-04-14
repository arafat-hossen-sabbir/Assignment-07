import React from "react";
import { FiPlus } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="w-full bg-base-200">
      <div className="flex flex-col items-center justify-center text-center px-4 pt-16 pb-10">
        <h1 className="text-xl md:text-5xl font-bold text-gray-800 leading-tight">
          Friends to keep close in your life
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-500 max-w-xl">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="mt-6 btn btn-primary bg-[#244d3f] rounded px-4 flex gap-1 items-center">
          <FiPlus className="inline" />
          Add a Friend
        </button>
      </div>

      <div className="px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white shadow-sm  rounded p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">12</h2>
            <p className="text-sm text-gray-500 mt-1">Total Friends</p>
          </div>

          <div className="bg-white shadow-sm  rounded p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">3</h2>
            <p className="text-sm text-gray-500 mt-1">On Track</p>
          </div>

          <div className="bg-white shadow-sm  rounded p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">6</h2>
            <p className="text-sm text-gray-500 mt-1">Need Attention</p>
          </div>

          <div className="bg-white shadow-sm rounded p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">12</h2>
            <p className="text-sm text-gray-500 mt-1">
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
