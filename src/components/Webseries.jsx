import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Web series list
const webSeriesList = [
  { title: "Farzi", image: "/assets/images/card-img/webseries/img-1.jpg" },
  { title: "Suzhal", image: "/assets/images/card-img/webseries/img-2.jpg" },
  {
    title: "Money Heist",
    image: "/assets/images/card-img/webseries/img-3.jpg",
  },
  { title: "Mirzapur", image: "/assets/images/card-img/webseries/img-4.jpg" },
  { title: "Leabel", image: "/assets/images/card-img/webseries/img-5.jpg" },
];

const Webseries = () => {
  return (
    <section className="p-4 bg-slate-600 text-black">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-500 inline-block">
        Web Series
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={1200}
        loop
        dir="rtl"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {webSeriesList.map((series, index) => (
          <SwiperSlide key={index}>
            <div className="bg-slate-700 text-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform hover:scale-105 duration-300">
              <img
                src={series.image}
                alt={series.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{series.title}</h3>
                <a
                  href="#"
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                >
                  Know it
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Webseries;
