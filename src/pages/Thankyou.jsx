import React from "react";
import { Link } from "react-router-dom";
import LandingFooter from "../components/landingPages/LandingFooter";
import { logoImg } from "../constant";

const Thankyou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-primary/20">
      <div className="py-4 top-0 w-full bg-black/20 backdrop-blur-md z-50 text-white">
        <div className="wrapper flex justify-between items-center gap-10">
          <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
            <Link to="/">
              <img
                src={logoImg}
                className="h-[3rem] md:h-[3.75rem] scale-125"
                alt="logo"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="wrapper h-full flex flex-col items-center py-[8rem] gap-3 text-white text-center">
        <h1 className="heading-1">Thank You!</h1>
        <p className="desc">
          We have received your message and will get back to you as soon as
          possible.
        </p>
        <Link to="/" className="primary-btn w-fit mt-4">
          Home
        </Link>
      </div>
      <LandingFooter/>
    </div>
  );
};

export default Thankyou;
