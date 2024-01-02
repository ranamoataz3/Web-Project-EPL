import React from "react";

const Banner = () => {
  return (
    <div
      id="homebanner"
      className="flex md:flex-row flex-col-reverse lg:px-28 py-4 px-10 justify-center"
    >
      <div className="flex-1 flex flex-col gap-6 justify-center  md:items-start items-center">
        <div className="flex flex-col gap-6 text-center w-fit">
          <h1 className="weak h1">
            Welcome Back
            <span className="primarytext block">Ready to kickoff?</span>
          </h1>
          <h6 className="weak h6"></h6>
        </div>
      </div>
      <div className="flex-1 flex justify-end pr-6">
        <img
          className="w-[100%] lg:w-auto"
          src="/imgs/main_page-trans.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
