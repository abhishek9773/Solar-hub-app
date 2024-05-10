import React from "react";

const WhyChooseScreen = () => {
  return (
    <div className="px-20 py-20 bg-gray-200 grid grid-cols-3 gap-9">
      <div className="w-[460px] h-[403px]">
        <div className="font-semibold text-7xl ">
          <spen className="text-red-500">Why</spen> choose Us{" "}
          <spen className="text-red-500">?</spen>
        </div>
        <div className="mt-8 text-xl w-[360px] ">
          Whether you're looking to switch to solar energy or upgrade your cable
          services, our sales and marketing company is here to help.
        </div>
      </div>
      {[1, 1, 1, 1, 1].map((item) => (
        <div className="bg-white w-[460px] h-[403px] rounded-md ">
          <div className="mx-10 my-10">
            <div className="text-6xl font-semibold text-red-600">01</div>
            <p className="text-2xl font-bold my-5 text-gray-500">
              Expertise and Experience
            </p>
            <p classsName="text-lg">
              With years of experience in the sales and marketing industry, our
              team has a deep
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseScreen;
