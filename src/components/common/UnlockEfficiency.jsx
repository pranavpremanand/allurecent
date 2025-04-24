import React from "react";
import { Link } from "react-router-dom";

const UnlockEfficiency = () => {
  return (
    <section className="py-[5rem] text-white bg-gradient-to-r from-primary/30 to-secondary/30">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-white items-center gap-5 text-center"
      >
        <div className="gradient-rounded-text-box">Unlock Efficiency</div>
        <h2 className="heading-2">Unlock the Power of Efficiency</h2>
        <p className="desc max-w-[50rem] text-center">
          Allurecent Software Solutions empowers businesses to harness the power
          of technology to drive growth and success. Our cutting-edge software
          solutions are designed to optimize operations, streamline processes,
          and provide a seamless user experience.
        </p>
        <Link to="/contact-us" className="primary-btn mt-3">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
