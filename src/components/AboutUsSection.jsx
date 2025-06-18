import React from "react";

const AboutUsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 2xl:py-32 bg-[#00B4D9] md:bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 2xl:px-16 max-w-7xl 2xl:max-w-[1920px]">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white md:text-black text-center mb-12 sm:mb-16 lg:mb-20 2xl:mb-24">
          <span className="md:hidden text-white">Who Are We?</span>
          <span className="hidden md:inline">
            <span style={{ color: "#00B4D9" }}>W</span>HO&nbsp;
            <span style={{ color: "#00B4D9" }}>A</span>RE&nbsp;
            <span style={{ color: "#00B4D9" }}>W</span>E?
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side: Text */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            {/* Mobile View - Show Only First Line */}
            <p className="text-white md:hidden font-medium text-xs sm:text-sm text-center">
              We build a vibrant space for knowledge-sharing. A community where ideas thrive and inspire.
            </p>

            {/* Desktop View - Keep All 4 Points */}
            <ul className="hidden md:block space-y-4 lg:space-y-6 2xl:space-y-8 text-black max-w-md lg:max-w-lg 2xl:max-w-xl mx-auto lg:mx-0">
              <li className="flex items-start gap-4 lg:gap-5 2xl:gap-6">
                <div className="w-2 h-10 2xl:h-12 bg-[#00B4D9]"></div>
                <span className="text-sm lg:text-base 2xl:text-lg">
                  <b>Driven by Innovation</b> – We bring fresh ideas to life with a forward-thinking approach.
                </span>
              </li>
              <li className="flex items-start gap-4 lg:gap-5 2xl:gap-6">
                <div className="w-2 h-10 2xl:h-12 bg-[#00B4D9]"></div>
                <span className="text-sm lg:text-base 2xl:text-lg">
                  <b>Skilled Professionals</b> – Our team is built on deep knowledge and real-world experience.
                </span>
              </li>
              <li className="flex items-start gap-4 lg:gap-5 2xl:gap-6">
                <div className="w-2 h-10 2xl:h-12 bg-[#00B4D9]"></div>
                <span className="text-sm lg:text-base 2xl:text-lg">
                  <b>End-to-End Support</b> – From planning to delivery, we guide every step of your journey.
                </span>
              </li>
              <li className="flex items-start gap-4 lg:gap-5 2xl:gap-6">
                <div className="w-2 h-10 2xl:h-12 bg-[#00B4D9]"></div>
                <span className="text-sm lg:text-base 2xl:text-lg">
                  <b>Partner-Focused</b> – We believe in building strong, lasting relationships with our clients.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Side: Image */}
          <div className="relative lg:w-[420px] lg:h-[350px] 2xl:w-[560px] 2xl:h-[466px]">
            {/* Gradient Background Box (System View Only) */}
            <div 
              className="hidden md:block absolute top-[-25px] right-[-25px] w-full h-full rounded-lg"
              style={{ background: "linear-gradient(135deg, #00B4D9, #0078B4)" }}
            ></div>

            {/* Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-full">
              <img
                src="https://portfolio-assest.s3.us-east-1.amazonaws.com/team1.png"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                alt="Team"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;