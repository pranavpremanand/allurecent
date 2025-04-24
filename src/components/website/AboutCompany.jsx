import React from "react";
import aboutUsImg from "../../assets/images/landing-aboutus.png";
import { Link } from "react-router-dom";

const AboutCompany = () => {
  return (
    <section className="py-[5rem] bg-black text-white wrapper">
      <div
        data-aos="fade-right"
        className="gradient-rounded-text-box mx-auto lg:mx-0"
      >
        About Us
      </div>
      <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
        <div data-aos="fade-right" className="flex h-full flex-col gap-7">
          <div className="flex flex-col gap-7 text-center lg:text-start">
            <h2 className="heading-2">
              Empowering Businesses with Innovative Software Solutions
            </h2>
            <p className="desc">
              Allurecent Software Solutions is an innovative tech startup
              dedicated to transforming businesses through cutting-edge
              technology. Our mission is to empower organizations by providing
              tailored software solutions that enhance operational efficiency
              and drive growth. With a focus on AI integration, data analytics,
              and user-friendly applications, we enable our clients to stay
              ahead in an ever-evolving digital landscape. Our team of experts
              collaborates closely with clients to understand their unique
              challenges and deliver customized solutions that meet their
              specific needs. At Allurecent, we believe in harnessing technology
              to create value, foster inclusivity, and build lasting
              partnerships.
            </p>
          </div>
          <div className="flex gap-5 mt-4 justify-center lg:justify-start">
            <Link to="/contact-us" className="primary-btn">
              Contact Us
            </Link>
            <Link to="/services" className="secondary-btn">
              Our Services
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" className="h-full">
          <img
            src={aboutUsImg}
            className="object-contain max-h-[30rem]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
