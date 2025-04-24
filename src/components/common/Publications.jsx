import React from "react";
import { Link } from "react-router-dom";
import { logoImg } from "../../constant";

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "Times Release Feature",
      link: "https://timesrelease.com/transform-your-business-with-allurecent-software-solutions-a-full-suite-of-development-services/",
      source: "Times Release",
      description:
        "How Allurecent is revolutionizing business transformation through full-stack development solutions",
    },
    {
      id: 2,
      title: "Prime Bulletins Feature",
      link: "https://primebulletins.com/transform-your-business-with-allurecent-software-solutions-a-full-suite-of-development-services/",
      source: "Prime Bulletins",
      description:
        "The comprehensive suite of tech solutions powering next-gen businesses",
    },
    {
      id: 3,
      title: "Hindustan Metro Feature",
      link: "https://www.hindustanmetro.com/transform-your-business-with-allurecent-software-solutions-a-full-suite-of-development-services/",
      source: "Hindustan Metro",
      description:
        "Digital transformation powered by Allurecent's innovative approach",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#151515] text-white overflow-hidden relative">
      <div className="wrapper">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary rounded-full filter blur-[120px] opacity-15 animate-rotate"></div>
          <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-indigo-500 rounded-full filter blur-[90px] opacity-10 animate-float-up"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="heading-2 mb-4">
              Media Spotlight
            </h2>
            <p className="desc max-w-3xl mx-auto">
              Recognized by leading publications for our innovative approach to
              digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publications.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative hover:z-10"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-xl blur-md group-hover:opacity-80 transition-opacity duration-500"></div>

                <div className="relative h-full bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-xl overflow-hidden transition-all duration-500 group-hover:border-secondary/30 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  <div className="p-6 flex flex-col h-full">
                    {/* Animated publication logo */}
                    <div className="mb-6 w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center animate-tilt">
                      <span className="text-xl font-bold">
                        {item.source.charAt(0)}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-6 flex-grow">
                      {item.description}
                    </p>

                    <div className="mt-auto">
                      <Link
                        to={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-secondary group-hover:text-secondary transition-colors duration-300"
                      >
                        <span>Read feature</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx global>{`
          /* Smooth floating up animation */
          @keyframes float-up {
            0%,
            100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-15px) scale(1.05);
            }
          }

          /* Slow pulsing animation */
          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 0.2;
              transform: scale(1);
            }
            50% {
              opacity: 0.3;
              transform: scale(1.05);
            }
          }

          /* Continuous rotation */
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          /* Gentle tilting animation */
          @keyframes tilt {
            0%,
            100% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(2deg);
            }
            75% {
              transform: rotate(-2deg);
            }
          }

          .animate-float-up {
            animation: float-up 8s ease-in-out infinite;
          }

          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }

          .animate-rotate {
            animation: rotate 20s linear infinite;
          }

          .animate-tilt {
            animation: tilt 5s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Publications;
