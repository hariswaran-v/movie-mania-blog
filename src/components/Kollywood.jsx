import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Celebs from "./Celebs";
import popularCelebrities from "../data/celebsImg";

const kollywoodMovies = [
  { title: "Aadukalam", image: "/assets/images/card-img/kollywood/img-1.jpg" },
  { title: "Jai Bhim", image: "/assets/images/card-img/kollywood/img-2.jpg" },
  {
    title: "Kadaisi Vivasayi",
    image: "/assets/images/card-img/kollywood/img-3.jpg",
  },
  {
    title: "Irudhi Suttru",
    image: "/assets/images/card-img/kollywood/img-4.jpg",
  },
  {
    title: "Lubber Pandhu",
    image: "/assets/images/card-img/kollywood/img-5.jpg",
  },
  {
    title: "Soorarai Pottru",
    image: "/assets/images/card-img/kollywood/img-6.jpg",
  },
  {
    title: "Sarpatta Parambarai",
    image: "/assets/images/card-img/kollywood/img-7.jpg",
  },
  {
    title: "Taanakkaran",
    image: "/assets/images/card-img/kollywood/img-8.jpg",
  },
  { title: "Thangalaan", image: "/assets/images/card-img/kollywood/img-9.jpg" },
  {
    title: "Viduthalai - I",
    image: "/assets/images/card-img/kollywood/img-10.jpg",
  },
];

const Kollywood = () => {
  const kollywoodCelebs = popularCelebrities.kollywood || [];

  return (
    <section className="p-4 bg-gray-900 text-white">
      <h2 className="text-xl font-bold my-6 border-b-2 border-red-500 inline-block">
        Kollywood Movies
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
        {kollywoodMovies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{movie.title}</h3>
                <a
                  href="#"
                  className="inline-block mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200"
                >
                  Know it
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Celebs Section */}
      <Celebs categoryData={kollywoodCelebs} />
    </section>
  );
};

export default Kollywood;
