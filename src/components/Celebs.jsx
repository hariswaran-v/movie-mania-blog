// src/components/Celebs.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const Celebs = ({ categoryData }) => {
  if (!Array.isArray(categoryData)) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 ">Popular Celebrities</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={6}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1200}
        breakpoints={{
          0: { slidesPerView: 1 },
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 7 },
        }}
      >
        {categoryData.map((celeb, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center px-2">
              <img
                src={celeb.image}
                alt={celeb.name}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">{celeb.name}</h3>
              <p className="text-sm text-gray-400">{celeb.role}</p>
              <button className="mt-2 px-4 py-1 text-sm text-white bg-red-600 rounded-full hover:bg-red-700 transition duration-200">
                About
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Celebs;
