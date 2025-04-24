import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.webp";
import webDevBanner from "./assets/images/web-landing-banner.webp";
import aiDevBanner from "./assets/images/ai-landing-banner.jpg";
import iotDevBanner from "./assets/images/iot-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import aiLandingAbout from "./assets/images/ai-landing-about.png";
import iotLandingAbout from "./assets/images/iot-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/about-us-banner.jpeg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";

// ai services icons
import { ReactComponent as aiIcon1 } from "./assets/svgs/AI Chatbots.svg";
import { ReactComponent as aiIcon2 } from "./assets/svgs/AI Voice Bots.svg";
import { ReactComponent as aiIcon3 } from "./assets/svgs/Machine Learning Models.svg";
import { ReactComponent as aiIcon4 } from "./assets/svgs/Natural Language Processing (NLP).svg";
import { ReactComponent as aiIcon5 } from "./assets/svgs/AI-Powered Analytics.svg";
import { ReactComponent as aiIcon6 } from "./assets/svgs/Automation Solutions.svg";

// app services icons
import { ReactComponent as appIcon1 } from "./assets/svgs/Native App Development.svg";
import { ReactComponent as appIcon2 } from "./assets/svgs/Cross-Platform Apps.svg";
import { ReactComponent as appIcon3 } from "./assets/svgs/App Maintenance and Support.svg";
import { ReactComponent as appIcon4 } from "./assets/svgs/App Monetization Strategies.svg";

// web services icons
import { ReactComponent as webIcon1 } from "./assets/svgs/E-commerce Development.svg";
import { ReactComponent as webIcon2 } from "./assets/svgs/Responsive Web Design.svg";
import { ReactComponent as webIcon3 } from "./assets/svgs/SEO & Performance Optimization.svg";
import { ReactComponent as webIcon4 } from "./assets/svgs/Content Management Systems.svg";

// iot services icons
import { ReactComponent as iotIcon1 } from "./assets/svgs/Smart Device Integration.svg";
import { ReactComponent as iotIcon2 } from "./assets/svgs/Real-Time Data Analytics.svg";
import { ReactComponent as iotIcon3 } from "./assets/svgs/Automation.svg";
import { ReactComponent as iotIcon4 } from "./assets/svgs/Secure IoT Solutions.svg";

import { lazy } from "react";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  aiDevBanner,
  aiLandingAbout,
  iotDevBanner,
  iotLandingAbout,
};

// company details
export const companyDetails = {
  phone: "+91-9731068406",
  whatsapp: "919731068406",
  email: "abc@xyz.com",
  address:
    "SPD Plaza, Koramangala Industrial Layout, 5th Block, Koramangala, Bengaluru, Karnataka 560034",
  twitter: "",
  linkedin: "https://www.linkedin.com/company/allurecent-software-solutions/",
  instagram:
    "https://www.instagram.com/allurecent_softwaresolutions?igsh=MWcwcTBzNnduNWxmaw%3D%3D&utm_source=qr",
  facebook: "",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Front-End Development",
    icon: webIcon1,
    description:
      "Using frameworks like React, Angular, and Vue.js, we create interactive and visually appealing user interfaces.",
  },
  {
    id: 2,
    title: "Back-End Development",
    icon: webIcon2,
    description:
      "Our team works with technologies such as Node.js, Ruby on Rails, and Python to build robust server-side systems.",
  },
  {
    id: 3,
    title: "Database Solutions",
    icon: webIcon3,
    description:
      "We ensure your data is organized, secure, and easily accessible with database technologies like MySQL, MongoDB, and PostgreSQL.",
  },
  {
    id: 4,
    title: "API Integration & Development",
    icon: webIcon4,
    description:
      "We craft APIs that seamlessly connect your systems, adding flexibility and functionality.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "Native App Development",
    icon: appIcon1,
    description:
      "We build optimized native apps for Android and iOS, ensuring high performance and a smooth user experience.",
  },
  {
    id: 2,
    title: "Cross-Platform Solutions",
    icon: appIcon2,
    description:
      "Using technologies like Flutter, React Native, and Xamarin, we develop apps that work seamlessly across multiple platforms with a single codebase.",
  },
  {
    id: 3,
    title: "App Design",
    icon: appIcon3,
    description:
      "Our UI/UX team focuses on creating intuitive interfaces that make using the app an enjoyable experience.",
  },
  {
    id: 4,
    title: "Ongoing Support & Maintenance",
    icon: appIcon4,
    description:
      "We provide continuous support and maintenance to keep your app up-to-date with the latest features and security updates.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Full Stack Web Development",
    desc: "A strong online presence starts with a well-crafted web application. At Allurecent, we provide comprehensive full-stack web development services to create scalable, secure, and high-performance websites and applications that bring your ideas to life.",
    detailContent:
      "A strong online presence starts with a well-crafted web application. At Allurecent, we provide comprehensive full-stack web development services to create scalable, secure, and high-performance websites and applications that bring your ideas to life.",
    whatWeOffer: [
      {
        title: "Front-End Development",
        desc: "Using frameworks like React, Angular, and Vue.js, we create interactive and visually appealing user interfaces.",
      },
      {
        title: "Back-End Development",
        desc: "Our team works with technologies such as Node.js, Ruby on Rails, and Python to build robust server-side systems.",
      },
      {
        title: "Database Solutions",
        desc: "We ensure your data is organized, secure, and easily accessible with database technologies like MySQL, MongoDB, and PostgreSQL.",
      },
      {
        title: "API Integration & Development",
        desc: "We craft APIs that seamlessly connect your systems, adding flexibility and functionality.",
      },
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "In today's mobile-driven world, a well-built app can transform your business. Whether you need an app for Android, iOS, or both, Allurecent specializes in creating high-performance mobile applications that are both functional and user-friendly.",
    detailContent:
      "In today's mobile-driven world, a well-built app can transform your business. Whether you need an app for Android, iOS, or both, Allurecent specializes in creating high-performance mobile applications that are both functional and user-friendly.",
    whatWeOffer: [
      {
        title: "Native App Development",
        desc: "We build optimized native apps for Android and iOS, ensuring high performance and a smooth user experience.",
      },
      {
        title: "Cross-Platform Solutions",
        desc: "Using technologies like Flutter, React Native, and Xamarin, we develop apps that work seamlessly across multiple platforms with a single codebase.",
      },
      {
        title: "App Design",
        desc: "Our UI/UX team focuses on creating intuitive interfaces that make using the app an enjoyable experience.",
      },
      {
        title: "Ongoing Support & Maintenance",
        desc: "We provide continuous support and maintenance to keep your app up-to-date with the latest features and security updates.",
      },
    ],
  },
  {
    id: 3,
    title: "Blockchain Development",
    desc: "Blockchain technology is changing the way businesses operate, offering secure and transparent solutions for a variety of industries. At Allurecent, we provide blockchain development services to help you tap into the potential of decentralized systems and smart contracts.",
    detailContent:
      "Blockchain technology is changing the way businesses operate, offering secure and transparent solutions for a variety of industries. At Allurecent, we provide blockchain development services to help you tap into the potential of decentralized systems and smart contracts.",
    whatWeOffer: [
      {
        title: "Smart Contract Development",
        desc: "We build secure and automated smart contracts on blockchain platforms such as Ethereum and Binance Smart Chain.",
      },
      {
        title: "Decentralized Applications (dApps)",
        desc: "Our team develops decentralized applications that run on blockchain networks, ensuring transparency and trust.",
      },
      {
        title: "Private Blockchain Solutions",
        desc: "We provide custom blockchain solutions for enterprises that require a secure, closed environment.",
      },
      {
        title: "Tokenization & ICO Support",
        desc: "If you're planning to launch a token or Initial Coin Offering (ICO), we offer end-to-end solutions to help you get started.",
      },
    ],
  },
  {
    id: 4,
    title: "Chatbot Development",
    desc: "AI-driven chatbots are revolutionizing customer service by providing instant responses and personalized interactions. At Allurecent, we create intelligent chatbots that can handle everything from customer inquiries to more complex tasks.",
    detailContent:
      "AI-driven chatbots are revolutionizing customer service by providing instant responses and personalized interactions. At Allurecent, we create intelligent chatbots that can handle everything from customer inquiries to more complex tasks.",
    whatWeOffer: [
      {
        title: "Conversational AI",
        desc: "We design AI-powered chatbots that understand and respond to natural language with ease, enhancing user interactions.",
      },
      {
        title: "Customer Support Automation",
        desc: "Our chatbots can help businesses automate customer support, ensuring faster response times and increased customer satisfaction.",
      },
      {
        title: "Custom Solutions",
        desc: "We develop custom chatbot solutions tailored to your business, integrating with platforms like CRMs, websites, and social media.",
      },
    ],
  },
  {
    id: 5,
    title: "Custom Software Development",
    desc: "Every business is unique, and so are its software requirements. Allurecent offers tailored software development solutions designed to address your specific needs and business challenges.",
    detailContent:
      "Every business is unique, and so are its software requirements. Allurecent offers tailored software development solutions designed to address your specific needs and business challenges. Whether it's a new enterprise system or an innovative business tool, we build software that works for you.",
    whatWeOffer: [
      {
        title: "Enterprise Solutions",
        desc: "We build large-scale software systems that meet the specific needs of your enterprise.",
      },
      {
        title: "Business Process Automation",
        desc: "We help automate your business workflows to improve efficiency and reduce operational costs.",
      },
      {
        title: "CRM & ERP Systems",
        desc: "We develop and customize CRM and ERP systems to streamline your operations and improve business management.",
      },
      {
        title: "System Integration",
        desc: "Our integration solutions ensure your new software works seamlessly with your existing systems, providing a unified experience.",
      },
    ],
  },
  {
    id: 6,
    title: "UX/UI Design",
    desc: "The user experience is central to any digital product's success. Our UX/UI design team at Allurecent focuses on creating intuitive and aesthetically pleasing designs that make interacting with your product a delight.",
    detailContent:
      "The user experience is central to any digital product's success. Our UX/UI design team at Allurecent focuses on creating intuitive and aesthetically pleasing designs that make interacting with your product a delight.",
    whatWeOffer: [
      {
        title: "User Research",
        desc: "We conduct thorough research to understand your target audience's behaviors and needs.",
      },
      {
        title: "Wireframing & Prototyping",
        desc: "We design wireframes and prototypes to visualize the user journey and ensure usability before development begins.",
      },
      {
        title: "UI Design",
        desc: "Our designers create visually appealing user interfaces that align with your brand and engage users.",
      },
      {
        title: "Usability Testing",
        desc: "We continually test and refine designs to ensure your product is intuitive and user-friendly.",
      },
    ],
  },
  {
    id: 7,
    title: "Game Development",
    desc: "At Allurecent, we specialize in creating immersive, high-quality games that captivate and engage players. Whether it's a mobile game, a PC game, or an immersive VR experience, our game development team brings your vision to life.",
    detailContent:
      "At Allurecent, we specialize in creating immersive, high-quality games that captivate and engage players. Whether it's a mobile game, a PC game, or an immersive VR experience, our game development team brings your vision to life.",
    whatWeOffer: [
      {
        title: "Concept Development",
        desc: "We collaborate with you to develop compelling game concepts and mechanics that appeal to your audience.",
      },
      {
        title: "Game Design & Development",
        desc: "Using Unity, Unreal Engine, and other industry-leading game engines, we build engaging 2D and 3D games.",
      },
      {
        title: "Multiplayer Features",
        desc: "We integrate real-time multiplayer features that allow players to connect and compete with each other globally.",
      },
      {
        title: "AR & VR Game Development",
        desc: "We also develop immersive augmented and virtual reality games that offer players a truly unique experience.",
      },
      {
        title: "Game Publishing & Maintenance",
        desc: "We assist with game publishing, distribution, and ongoing support to ensure your game reaches its full potential.",
      },
    ],
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/web-development/5ghomes.webp"),
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/web-development/cold-creekcap.webp"),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/web-development/think-reality.webp"),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/web-development/akash-mega-mart.webp"),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/web-development/midwam.webp"),
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/app-development/akash_mega_mart-app.webp"),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/app-development/feelit_app.webp"),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/app-development/klikomics.webp"),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/app-development/autosnap-app.webp"),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/app-development/rentop.webp"),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
