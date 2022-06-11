import React from "react";

const About = () => {
  return (
    <section className="py-28 border-t-2">
      <div className="max-w-7xl m-auto px-4 xl:px-0 flex items-center lg:justify-between">
        <div className="space-y-1">
          <p className="text-gray-500 text-sm font-semibold lg:text-xl">
            About
          </p>
          <p className="text-gray-500 text-sm font-semibold lg:text-xl">
            Strategy
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-gray-500 text-sm font-semibold lg:text-xl">
            Rewards & Taxes
          </p>
          <p className="text-gray-500 text-sm font-semibold lg:text-xl">
            Roadmap
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-black text-sm font-semibold lg:text-xl">Contact</p>
          <p className="text-gray-500 text-sm font-semibold lg:text-xl">
            example@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
