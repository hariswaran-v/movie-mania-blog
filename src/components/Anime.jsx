import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Anime list
const animeList = [
  { title: "Solo Leveling", image: "/assets/images/card-img/anime/img-1.jpg" },
  { title: "One Piece", image: "/assets/images/card-img/anime/img-2.jpg" },
  { title: "Dandadan", image: "/assets/images/card-img/anime/img-3.jpg" },
  { title: "Naruto", image: "/assets/images/card-img/anime/img-4.jpg" },
  { title: "Kaiju No. 8", image: "/assets/images/card-img/anime/img-5.jpg" },
];

const Anime = () => {
  return (
    <section className="p-4 bg-slate-800 text-white">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-indigo-500 inline-block">
        Anime Series
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
        {animeList.map((anime, index) => (
          <SwiperSlide key={index}>
            <div className="bg-slate-700 text-white  rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform hover:scale-105 duration-300">
              <img
                src={anime.image}
                alt={anime.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{anime.title}</h3>
                <a
                  href="#"
                  className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200"
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

export default Anime;
