import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const hollywoodMovies = [
  { title: "Spider Man", image: "/assets/images/card-img/hollywood/img-1.jpg" },
  { title: "The Batman", image: "/assets/images/card-img/hollywood/img-2.jpg" },
  { title: "John Wick", image: "/assets/images/card-img/hollywood/img-3.jpg" },
  {
    title: "Mission Impossible",
    image: "/assets/images/card-img/hollywood/img-4.jpg",
  },
  { title: "Joker", image: "/assets/images/card-img/hollywood/img-5.jpg" },
  {
    title: "Avengers: Endgame",
    image: "/assets/images/card-img/hollywood/img-6.jpg",
  },
  {
    title: "Deadpool & Wolverine",
    image: "/assets/images/card-img/hollywood/img-7.jpg",
  },
  {
    title: "Ghost Rider",
    image: "/assets/images/card-img/hollywood/img-8.jpg",
  },
];

const Hollywood = () => {
  return (
    <section className="p-4 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-500 inline-block">
        Hollywood Movies
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1200}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {hollywoodMovies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-700 text-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{movie.title}</h3>
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

export default Hollywood;
