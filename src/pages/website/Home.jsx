import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../components/landingPages/Contact";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../components/website/OurServices";
import EndlessOpportunitiesSection from "../../components/common/EndlessOpportunitiesSection";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";
import AboutCompany from "../../components/website/AboutCompany";
import Publications from "../../components/common/Publications";

const Home = () => {
  return (
    <>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              IT Services
            </div>
            <h1 className="heading-1">
              Shaping the Future of Digital Innovation
            </h1>
            <p className="desc">
              We are a leading IT service provider, dedicated to delivering
              innovative solutions that drive business success.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <AboutCompany />
      <OurServices length={3} />
      <WhyChooseUs />
      <UnlockEfficiency />
      <EndlessOpportunitiesSection />
      <Publications />
      <Contact />
    </>
  );
};

export default Home;
