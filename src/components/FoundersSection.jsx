import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import founder1 from "../assets/founder1.png";
import founder2 from "../assets/founder2.png";
import founder3 from "../assets/founder3.png";

const founders = [
  { id: 1, name: "Bharath Kumar R", img: founder1, alt: "Bharath R portrait" },
  { id: 2, name: "Jeevitha V", img: founder2, alt: "Jeevitha portrait" },
  { id: 3, name: "Nishanth V", img: founder3, alt: "Nishanth portrait" },
];

const FoundersSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 2xl:py-32 bg-gray-50 min-h-[400px] 2xl:min-h-[600px]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 2xl:px-16 max-w-7xl 2xl:max-w-[1920px]">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-black text-center mb-12 sm:mb-16 lg:mb-20 2xl:mb-24 tracking-tight">
          <span style={{ color: "#00B4D9" }}>O</span>
          <span>UR</span>
          <span className="inline-block w-6 sm:w-8 lg:w-6"></span>
          <span style={{ color: "#00B4D9" }}>F</span>
          <span>OUNDER'S</span>
        </h2>

        {/* Swiper for Mobile, Desktop, and 4K with Infinite Loop */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.2} // Default for mobile
          breakpoints={{
            640: { slidesPerView: 2.5 }, // Tablet
            1024: { slidesPerView: 3 }, // Desktop
            1536: { slidesPerView: 3.5 }, // 4K
          }}
          spaceBetween={-10}
          loop={true} // Enables infinite loop
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-scroll effect
          coverflowEffect={{
            rotate: 0,
            stretch: -30,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full pb-8 2xl:pb-12"
        >
          {[...founders, ...founders].map((founder, index) => (
            <SwiperSlide
              key={index}
              className="text-center relative flex flex-col items-center justify-center"
            >
              <div className="relative w-64 h-64 md:w-[460px] md:h-[500px] 2xl:w-[600px] 2xl:h-[652px] mx-auto rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src={founder.img}
                  alt={founder.alt}
                  className="w-full h-full object-cover translate-y-4 swiper-slide-img"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-semibold text-gray-800 mt-4 2xl:mt-6">
                {founder.name}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Inline CSS for stronger blur effect */}
      <style>
        {`
          .swiper-slide {
            filter: blur(100px);
            transition: filter 0.3s ease;
          }
          .swiper-slide-active {
            filter: none;
          }
        `}
      </style>
    </section>
  );
};

export default FoundersSection;