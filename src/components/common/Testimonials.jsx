import React from "react";
import { useKeenSlider } from "keen-slider/react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const reviews = [
  {
    id: 1,
    profileImg: require("../../assets/images/testimonial/1.jpg"),
    name: "Jennifer David",
    role: "CEO of EcoTech Solutions",
    desc: "“We couldn’t be more pleased with the work Allurecentdid on our website. Their team took the time to understand our business needs and built a stunning, fully responsive website that works seamlessly across all devices. From design to functionality, everything exceeded our expectations. Their dedication and expertise have made a significant difference in our online presence.”",
  },
  {
    id: 2,
    profileImg: require("../../assets/images/testimonial/2.jpg"),
    name: "Sunil Kumar",
    role: "CTO of HealthTrack Technologies",
    desc: "“The team at Allurecentprovided exactly what we needed for our complex web application. From front-end design to back-end integration, they brought our vision to life while maintaining a focus on user experience and scalability. We now have a platform that can grow with our business, and we couldn’t be happier with the results.”",
  },
  {
    id: 3,
    profileImg: require("../../assets/images/testimonial/3.jpg"),
    name: "Rajesh Mehta",
    role: "Founder of FitBuddy",
    desc: "“We had a great experience working with Allurecenton our mobile app. They not only delivered a product that met all our specifications but also guided us through every stage of development. The app is user-friendly, reliable, and has become an integral part of our business. The feedback from our customers has been overwhelmingly positive.”",
  },
  {
    id: 4,
    profileImg: require("../../assets/images/testimonial/4.jpg"),
    name: "Rahul Sharma",
    role: "CEO of ShopSmart",
    desc: "“From the moment we started working with Allurecent, we felt confident that they could help us bring our app idea to life. They were professional, responsive, and, most importantly, delivered a high-quality app on time and within budget. Our customers love it, and we’re seeing a significant increase in engagement and retention.”",
  },
];

const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 1,
            spacing: 20,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Button click handler
  const handleNextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next(); // Move to the next slide
    }
  };

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev(); // Move to the prev slide
    }
  };
  return (
    <div className="py-[5rem]">
      <div className="wrapper flex flex-col items-center gap-7">
        <div className="gradient-rounded-text-box" data-aos="fade-up">
          Testimonials
        </div>
        <h2
          className="heading-2 text-white mb-2 text-center"
          data-aos="fade-up"
        >
          What Our Clients Say
        </h2>
        <div
          ref={sliderRef}
          className="keen-slider max-w-3xl"
          data-aos="fade-up"
        >
          {reviews.concat(reviews).map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide min-h-[18rem] justify-between text-white p-7 bg-[#101010] rounded-xl flex flex-col gap-4"
            >
              <p className="italic desc">{item.desc}</p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <img
                    src={item.profileImg}
                    alt={item.name}
                    className="h-[3rem] w-[3rem] min-w-[3rem] aspect-square rounded-full object-cover"
                  />
                  <div className="flex flex-col h-full">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          className="flex justify-center items-center gap-10 mt-2"
        >
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handlePrevClick}
            aria-label="Previous slide"
          >
            <IoArrowBackCircleOutline />
          </button>
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handleNextClick}
            aria-label="Next slide"
          >
            <IoArrowForwardCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
