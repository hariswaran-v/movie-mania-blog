import React, { useState, useCallback, memo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";

// Enhanced anime data with more details
const animeList = [
  {
    id: 1,
    title: "Solo Leveling",
    image: "/assets/images/card-img/anime/img-1.jpg",
    rating: 9.2,
    year: 2024,
    episodes: 12,
    genre: "Action, Fantasy",
    status: "Ongoing",
    studio: "A-1 Pictures",
  },
  {
    id: 2,
    title: "One Piece",
    image: "/assets/images/card-img/anime/img-2.jpg",
    rating: 9.8,
    year: 1999,
    episodes: 1000,
    genre: "Adventure, Comedy",
    status: "Ongoing",
    studio: "Toei Animation",
  },
  {
    id: 3,
    title: "Dandadan",
    image: "/assets/images/card-img/anime/img-3.jpg",
    rating: 8.9,
    year: 2024,
    episodes: 12,
    genre: "Supernatural, Comedy",
    status: "Ongoing",
    studio: "Science SARU",
  },
  {
    id: 4,
    title: "Naruto",
    image: "/assets/images/card-img/anime/img-4.jpg",
    rating: 9.0,
    year: 2002,
    episodes: 720,
    genre: "Action, Ninja",
    status: "Completed",
    studio: "Pierrot",
  },
  {
    id: 5,
    title: "Kaiju No. 8",
    image: "/assets/images/card-img/anime/img-5.jpg",
    rating: 8.7,
    year: 2024,
    episodes: 12,
    genre: "Action, Sci-Fi",
    status: "Ongoing",
    studio: "Production I.G",
  },
];

// Professional Anime Card Component
const AnimeCard = memo(({ anime, onWatchClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getRatingColor = (rating) => {
    if (rating >= 9.0) return "text-green-400";
    if (rating >= 8.0) return "text-yellow-400";
    return "text-orange-400";
  };

  const getStatusColor = (status) => {
    return status === "Ongoing" ? "bg-green-500" : "bg-blue-500";
  };

  return (
    <div className="group relative bg-gradient-to-br from-indigo-900/30 to-purple-900/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-indigo-500/20 hover:border-indigo-400/50">
      {/* Anime Poster */}
      <div className="relative aspect-[2] overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 to-purple-800 animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-indigo-800 to-purple-800 flex items-center justify-center">
            <div className="text-center text-indigo-300">
              <Zap className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Image not available</p>
            </div>
          </div>
        ) : (
          <img
            src={anime.image}
            alt={anime.title}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        )}

        {/* Overlay with details */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center justify-between text-sm mb-3">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-indigo-400" />
                <span>{anime.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span>{anime.episodes} eps</span>
              </div>
            </div>
            <p className="text-xs text-indigo-300 mb-2">{anime.studio}</p>
          </div>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => onWatchClick(anime)}
            className="bg-indigo-600/90 hover:bg-indigo-600 text-white p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg backdrop-blur-sm"
          >
            <Play className="w-6 h-6 ml-1" />
          </button>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl text-sm font-bold flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className={getRatingColor(anime.rating)}>{anime.rating}</span>
        </div>

        {/* Status Badge */}
        <div
          className={`absolute top-3 left-3 ${getStatusColor(
            anime.status
          )} text-white px-2 py-1 rounded-lg text-xs font-semibold`}
        >
          {anime.status}
        </div>
      </div>

      {/* Anime Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-indigo-400 transition-colors">
          {anime.title}
        </h3>
        <p className="text-indigo-300 text-sm mb-3 font-medium">
          {anime.genre}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <span>{anime.episodes} Episodes</span>
          <span>{anime.year}</span>
        </div>

        <button
          onClick={() => onWatchClick(anime)}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 shadow-lg"
        >
          <Play className="w-4 h-4" />
          <span>Watch Now</span>
        </button>
      </div>
    </div>
  );
});

// Custom Carousel Component
const AnimeCarousel = ({ animes, onWatchClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, animes.length - 2));
  }, [animes.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, animes.length - 2)) %
        Math.max(1, animes.length - 2)
    );
  }, [animes.length]);

  // Auto-play effect
  React.useEffect(() => {
    if (!isAutoPlaying || animes.length <= 3) return;

    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying, animes.length]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Buttons */}
      {animes.length > 3 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-indigo-600/70 hover:bg-indigo-600/90 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-xl"
            aria-label="Previous anime"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-indigo-600/70 hover:bg-indigo-600/90 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-xl"
            aria-label="Next anime"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Anime Grid */}
      <div className="overflow-hidden px-12">
        <div
          className="flex transition-transform duration-700 ease-out gap-8"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / Math.min(3, animes.length))
            }%)`,
          }}
        >
          {animes.map((anime) => (
            <div key={anime.id} className="flex-none w-1/3 min-w-[300px]">
              <AnimeCard anime={anime} onWatchClick={onWatchClick} />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      {animes.length > 3 && (
        <div className="flex justify-center space-x-3 mt-8">
          {Array.from({ length: Math.max(1, animes.length - 2) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-indigo-500 scale-125 shadow-lg"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

// Main Professional Anime Component
const Anime = () => {
  const handleWatchClick = useCallback((anime) => {
    console.log("Watch anime:", anime.title);
    // Handle navigation or modal opening for anime watching
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950/30 to-purple-950/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-1.5 h-10 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Anime{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                  Universe
                </span>
              </h2>
              <div className="flex items-center space-x-4">
                <span className="px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-semibold">
                  Premium Collection
                </span>
                <div className="flex items-center space-x-1 text-yellow-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">Trending Now</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            Dive into the captivating world of Japanese animation. From epic
            adventures to heartwarming stories, discover the finest anime series
            with stunning visuals and unforgettable characters.
          </p>
        </div>

        {/* Anime Carousel */}
        <div className="mb-16">
          <AnimeCarousel animes={animeList} onWatchClick={handleWatchClick} />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-indigo-900/20 rounded-2xl border border-indigo-500/20 backdrop-blur-sm">
            <div className="text-3xl font-bold text-indigo-400 mb-2">50+</div>
            <div className="text-gray-400 text-sm">Anime Series</div>
          </div>
          <div className="text-center p-6 bg-indigo-900/20 rounded-2xl border border-indigo-500/20 backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-400 mb-2">9.2</div>
            <div className="text-gray-400 text-sm">Avg Rating</div>
          </div>
          <div className="text-center p-6 bg-indigo-900/20 rounded-2xl border border-indigo-500/20 backdrop-blur-sm">
            <div className="text-3xl font-bold text-indigo-400 mb-2">15</div>
            <div className="text-gray-400 text-sm">Award Winners</div>
          </div>
          <div className="text-center p-6 bg-indigo-900/20 rounded-2xl border border-indigo-500/20 backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Streaming</div>
          </div>
        </div>

        {/* Genre Tags */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <Award className="w-6 h-6 text-indigo-400" />
            <h3 className="text-2xl font-bold text-white">Popular Genres</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Action",
              "Adventure",
              "Fantasy",
              "Sci-Fi",
              "Romance",
              "Comedy",
              "Drama",
              "Supernatural",
              "Slice of Life",
              "Thriller",
            ].map((genre) => (
              <span
                key={genre}
                className="px-5 py-2.5 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium hover:from-indigo-600/30 hover:to-purple-600/30 transition-all duration-300 cursor-pointer hover:scale-105 backdrop-blur-sm"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Anime;
