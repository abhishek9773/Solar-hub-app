import React from "react";

const ExpertScreen = () => {
  return (
    <div className="my-20">
      <div className="mx-20">
        <h2 className="font-semibold text-4xl">Our Expertise and Experience</h2>
        <div className="grid grid-cols-5 gap-5 md:grid-rows  my-10">
          {[1, 1, 1, 1, 1].map((item) => (
            <div className="w-[270px] h-[432px] relative  bg-gradient-to-t from-neutral-500 to-neutral-900 rounded-lg  ">
              <img
                className=" w-[280px] h-[432px] absolute object-cover rounded-lg mix-blend-overlay "
                src="https://cdn.pixabay.com/photo/2024/03/26/11/57/solar-8656654_1280.jpg"
                alt=""
              />
              <div className="mx-6">
                <div className="font-semibold text-xl  my-3 text-white">
                  solar solutions
                </div>
                <p className="text-white">
                  Harness the power of the sun and embrace clean, renewable
                  energy with our solar solutions.
                </p>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default ExpertScreen;
