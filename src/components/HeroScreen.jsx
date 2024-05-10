import React from "react";

const HeroScreen = () => {
  return (
    <div className=" h-[600px] item-left  rounded-md my-4 relative  bg-gradient-to-r from-neutral-900 to-neutral-500 ">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Building_solar_%28673%29.jpg/640px-Building_solar_%28673%29.jpg"
        alt=""
      />
      <div className="w-[55%]  p-[15rem] ">
        <p className="uppercase text-5xl text-white font-extrabold    ">
          solar <spen className="text-red-800 font-extrabold">solutions</spen>{" "}
          for a sustainable Tomorrow{" "}
          <spen className="text-red-900  font-extrabold">.</spen>
        </p>
      </div>
    </div>
  );
};

export default HeroScreen;
