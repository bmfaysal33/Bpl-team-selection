import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className=" text-xl">
            <img className="w-[60px] h-[60px]" src="./logo.png" alt="" />
          </a>
        </div>
        <div className="flex">
          <span>6000000</span>
          <span className="mx-1"> Coin</span>
          <img src="public/dollar-1.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
