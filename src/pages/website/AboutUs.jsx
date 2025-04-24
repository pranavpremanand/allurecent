import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
} from "../../constant";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";
import OurServices from "../../components/website/OurServices";
import Testimonials from "../../components/common/Testimonials";
import AboutCompany from "../../components/website/AboutCompany";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import Publications from "../../components/common/Publications";

const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-[100%_35%] h-full w-full"
          alt=""
        />
      </div>
      <AboutCompany />
      <div className="text-white text-center">
        <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <div className="">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-1 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 text-center bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <div
                    data-aos="fade-left"
                    className="max-h-[15rem] flex items-center"
                  >
                    <img
                      src={aboutUsGridImg1}
                      alt="Innovation at Heart"
                      className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                    />
                  </div>
                  <h6 className="font-bold text-3xl font-raleway">
                    Our Mission
                  </h6>
                  <p className="desc mt-2">
                    At Allurecent, our mission is to partner with our clients to
                    understand their challenges and objectives, and develop
                    solutions that are creative, strategic, and
                    technology-driven. We focus on bringing your ideas to life,
                    whether you're developing a new product or improving
                    existing systems. Our commitment to excellence, flexibility,
                    and customer satisfaction drives us to deliver solutions
                    that not only meet but exceed expectations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-1 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 text-center bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <div
                    data-aos="fade-right"
                    className="max-h-[15rem] flex items-center"
                  >
                    <img
                      src={aboutUsGridImg2}
                      alt="Client-Centric Approach"
                      className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                    />
                  </div>
                  <h6 className="font-bold text-3xl font-raleway">
                    Our Vision
                  </h6>
                  <p className="desc mt-2">
                    Our vision is simple: to empower businesses by providing
                    innovative digital solutions that create real value. We
                    strive to push the boundaries of what's possible, helping
                    companies not only survive in today’s digital landscape but
                    thrive in it. By staying ahead of trends and continuously
                    exploring new technologies, we aim to be the trusted partner
                    businesses turn to for their digital needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WhyChooseUs />
        <UnlockEfficiency />
      </div>
      <Publications />
      <OurServices length={3} />
      <Testimonials />
    </>
  );
};

export default AboutUs;
