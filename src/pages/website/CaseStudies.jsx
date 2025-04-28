import { Link } from "react-router-dom";
import portfolio from "../../assets/portfolio.pdf";
import Banner from "../../components/website/Banner";

const caseStudies = [
  {
    title: "E-commerce Platform Scalability",
    problem:
      "A fast-growing online retail company faced major downtime during flash sales and festive seasons, leading to revenue loss and customer dissatisfaction.",
    challenges: [
      "Unstable servers during high-traffic surges.",
      "Poor user experience with frequent crashes.",
      "Lost sales opportunities during critical periods.",
    ],
    approach:
      "We began with a detailed traffic analysis and architecture audit to understand stress points and failures.",
    solution: [
      "Migrated the website to a cloud environment with auto-scaling.",
      "Optimized the backend code for better performance.",
      "Implemented CDN (Content Delivery Network) for faster content delivery globally.",
    ],
    results: [
      "Achieved 99.9% uptime during peak events.",
      "23% increase in sales during the next festive season.",
      "2x improvement in average page load speed.",
    ],
  },
  {
    title: "Mobile App for a Logistics Company",
    problem:
      "A logistics firm lacked real-time visibility into fleet movement and delivery updates, causing delivery delays and poor customer trust.",
    challenges: [
      "Manual vehicle tracking through calls.",
      "Inefficient route planning.",
      "No delivery status for customers.",
    ],
    approach:
      "Conducted field studies with delivery agents and fleet managers to map out pain points.",
    solution: [
      "Built a custom mobile app for real-time fleet tracking.",
      "Integrated live GPS updates and optimized route suggestions.",
      "Created a customer notification system for real-time updates.",
    ],
    results: [
      "Delivery time reduced by 28%.",
      "Customer satisfaction scores increased by 32%.",
      "Fuel and operational costs decreased by 18%.",
    ],
  },
  {
    title: "AI Chatbot for Customer Support",
    problem:
      "An online fashion retailer's customer support team was overwhelmed with repetitive inquiries, leading to response delays and loss of potential buyers.",
    challenges: [
      "High volume of common FAQs.",
      "Long wait times for live support.",
      "Increased cost of maintaining a large support team.",
    ],
    approach:
      "Analyzed historical support data to identify common queries and pain points.",
    solution: [
      "Deployed an AI chatbot to handle FAQs, order tracking, and returns.",
      "Integrated with CRM for seamless ticket escalation to human agents.",
    ],
    results: [
      "75% of customer queries handled automatically.",
      "Customer service response time improved by 50%.",
      "Support costs reduced by 40%.",
    ],
  },
  {
    title: "Custom ERP for Manufacturing",
    problem:
      "A mid-sized manufacturing firm operated with outdated systems leading to miscommunication and operational delays.",
    challenges: [
      "Disconnected departments (inventory, sales, production).",
      "Manual data entry errors.",
      "Lack of real-time reporting.",
    ],
    approach:
      "Held workshops with each department to gather system requirements and mapped workflows.",
    solution: [
      "Built a unified, cloud-based ERP system customized for the manufacturing process.",
      "Real-time dashboards for inventory, sales, and production data.",
    ],
    results: [
      "Manual errors decreased by 60%.",
      "Production delays reduced by 25%.",
      "Faster decision-making with real-time data access.",
    ],
  },
  {
    title: "Website Redesign for a Tech Startup",
    problem:
      "A technology startup was losing potential customers due to an outdated and confusing website experience.",
    challenges: [
      "Poor navigation and UI/UX.",
      "Low engagement and high bounce rates.",
      "Branding inconsistency.",
    ],
    approach:
      "Conducted user journey mapping and multiple A/B tests to optimize the website experience.",
    solution: [
      "Delivered a modern, mobile-optimized website with intuitive navigation.",
      "Rebranded the UI consistent with the company's vision and messaging.",
    ],
    results: [
      "Bounce rate reduced by 30%.",
      "Average session time increased by 45%.",
      "Lead generation improved by 22%.",
    ],
  },
  {
    title: "Augmented Reality for Retail",
    problem:
      "A furniture brand struggled to showcase products online, affecting online conversions.",
    challenges: [
      "Customers unable to visualize products in their homes.",
      "High product return rates due to unmet expectations.",
    ],
    approach:
      "Worked closely with marketing and product teams to identify visualization needs.",
    solution: [
      "Developed an AR application allowing users to view furniture virtually in their own space.",
      "Enabled color, material, and size customization previews.",
    ],
    results: [
      "Boosted online sales by 22%.",
      "Reduced return rates by 18%.",
      "Improved customer engagement with 3D product views.",
    ],
  },
];

const CaseStudies = () => {
  return (
    <div className="bg-black text-white min-h-screen font-inter pb-20">
      {/* Hero Section */}
      <Banner page="Case Studies" />

      {/* Intro Section */}
      <section data-aos="fade-up" className="wrapper py-16">
        <h2 className="heading-2 mb-6 text-center">
          Real Results: Empowering Businesses with Innovation
        </h2>
        <p className="desc text-lg max-w-3xl mx-auto mb-4 text-center">
          We craft solutions that transform industries through technology,
          strategy, and passion.
        </p>
        <p className="desc text-lg max-w-3xl mx-auto text-center">
          Explore our curated case studies highlighting measurable success.
        </p>
      </section>

      {/* Detailed Case Studies */}
      <section className="wrapper py-16">
        <h2 className="heading-2 mb-12 text-center">Detailed Case Studies</h2>

        <div data-aos="fade-up" className="space-y-20">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/70 transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-4 p-8 bg-gray-900/50 backdrop-blur-lg">
                {/* Title */}
                <div className="md:col-span-3 mb-1">
                  <h3 className="text-2xl font-bold font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#9c2cdd] to-[#5B6CFF_30%] mb-2">
                    {study.title}
                  </h3>
                </div>

                {/* Problem & Challenges */}
                <div className="bg-gray-900 p-6 rounded-lg shadow-inner">
                  <h4 className="font-bold text-lg mb-4 text-secondary">
                    Problem
                  </h4>
                  <p className="desc mb-6">{study.problem}</p>
                  <h4 className="font-bold text-lg mb-4 text-secondary">
                    Challenges
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 desc">
                    {study.challenges.map((challenge, idx) => (
                      <li key={idx}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                {/* Approach & Solution */}
                <div className="bg-gray-900 p-6 rounded-lg shadow-inner">
                  <h4 className="font-bold text-lg mb-4 text-secondary">
                    Approach
                  </h4>
                  <p className="desc mb-6">{study.approach}</p>
                  <h4 className="font-bold text-lg mb-4 text-secondary">
                    Solution
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 desc">
                    {study.solution.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg shadow-lg">
                  <h4 className="font-bold text-lg mb-4 text-white">Results</h4>
                  <ul className="list-disc pl-5 space-y-2 text-white">
                    {study.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section data-aos="fade-up" className="wrapper py-20">
        <h2 className="heading-2 mb-8 text-center">Our Portfolio</h2>

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary to-secondary p-1 rounded-2xl">
          <div className="bg-black rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10">
            {/* PDF Preview */}
            <div className="flex-1 w-full">
              <div className="border border-gray-700 rounded-lg overflow-hidden min-h-[400px] flex items-center justify-center bg-gray-900 hover:scale-105 transition-transform duration-300">
                <iframe
                  src="/portfolio.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  title="Allurecent Portfolio"
                  frameBorder="0"
                  className="w-full h-full aspect-square"
                />
              </div>
            </div>

            {/* Download Info */}
            <div className="flex-1 w-full">
              <h3 className="text-2xl font-semibold mb-4 font-raleway">
                Download Our Full Portfolio
              </h3>
              <p className="desc mb-6">
                Discover more in-depth success stories by accessing our complete
                portfolio.
              </p>
              <a
                href={portfolio}
                download="Allurecent_Portfolio.pdf"
                className="inline-block primary-btn"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-aos="fade-up" className="wrapper py-20 text-center">
        <h2 className="heading-2 mb-6">Ready to Transform Your Business?</h2>
        <Link
          to="/contact-us"
          className="primary-btn w-fit mx-auto hover:scale-105 transition-transform duration-300"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default CaseStudies;
