import React from "react";

const WhoAmIScreen = () => {
  return (
    <div className=" px-[55px] py-[55px] bg-red-500 grid grid-cols-2 gap-4">
      <div className="text-white">
        <p className="text-5xl font-semibold">Who We Are</p>
        <p className="text-xl w-[70%]  my-5 ">
          Welcome to our sales and marketing company, where we specialize in
          helping customers snag great deals from the leading solar and cable
          companies in the DC, Maryland, and Virginia area.We understand that
          finding the right solar and cable solutions for your needs can be a
          daunting task, which is why we're here to make the process easier and
          more affordable for you.
        </p>
        <div className=" ">
          <button className="px-6 py-3 bg-white hover:bg-gray-400 text-black text-xl rounded-full mx-2">
            Read More
          </button>
          <button className="px-6 py-3 bg-black hover:bg-slate-800 text-white text-xl rounded-full mx-2">
            Contact us Today
          </button>
        </div>
      </div>
      <div className="">
        <img className="" src="src/images/store.png" alt="" />
      </div>
    </div>
  );
};

export default WhoAmIScreen;
