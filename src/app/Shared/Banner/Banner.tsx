import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              Inspiration for travel by real people
            </h1>
            <p className="mb-5">Book smart, travel simple</p>
            <button className="bg-white px-4 py-2 text-black rounded-md">
              Start planning your trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
