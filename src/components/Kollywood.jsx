import React, { useState, useCallback, memo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  Calendar,
  Eye,
} from "lucide-react";
import { moviesList } from "../data/moviesList";
import { celebrities } from "../data/celebsList";

const { kollywoodMovies } = moviesList;
const { kollywoodCelebs } = celebrities;

// Optimized Movie Card Component
const MovieCard = memo(({ movie, onKnowMore }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Movie Poster */}
      <div className="relative aspect-[3/4] overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <img
          src={movie.image}
          alt={movie.title}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="lazy"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{movie.year}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{movie.rating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 ml-1" />
          </button>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span>{movie.rating}</span>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 line-clamp-1 group-hover:text-red-400 transition-colors">
          {movie.title}
        </h3>
        <p className="text-gray-400 text-sm mb-2">{movie.genre}</p>
        <p className="text-gray-500 text-xs mb-3">Dir: {movie.director}</p>

        <button
          onClick={() => onKnowMore(movie)}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
        >
          <Eye className="w-4 h-4" />
          <span>Know More</span>
        </button>
      </div>
    </div>
  );
});

// Celebrity Card Component
const CelebCard = memo(({ celeb }) => {
  return (
    <section
      className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[280px]"
      id="kollywood"
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={celeb.image}
            alt={celeb.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-red-500/50 group-hover:border-red-500 transition-colors"
            loading="lazy"
          />
          <div className="absolute -bottom-1 -right-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
            ⭐
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
            {celeb.name}
          </h4>
          <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
            <span>{celeb.movies} Movies</span>
            <span>{celeb.awards} Awards</span>
          </div>
        </div>
      </div>
    </section>
  );
});

// Custom Movie Carousel Component
const MovieCarousel = ({ movies, onKnowMore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, movies.length - 4));
  }, [movies.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, movies.length - 4)) %
        Math.max(1, movies.length - 4)
    );
  }, [movies.length]);

  // Auto-play effect
  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
        aria-label="Previous movies"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
        aria-label="Next movies"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Movie Grid */}
      <div className="overflow-hidden px-12">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / Math.min(5, movies.length))
            }%)`,
          }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none w-1/5 min-w-[250px]">
              <MovieCard movie={movie} onKnowMore={onKnowMore} />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: Math.max(1, movies.length - 4) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-red-500 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
};

// Celebrity Carousel Component
const CelebCarousel = ({ celebrities }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, celebrities.length - 3));
  }, [celebrities.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, celebrities.length - 3)) %
        Math.max(1, celebrities.length - 3)
    );
  }, [celebrities.length]);

  // Auto-play effect
  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-red-600/50 hover:bg-red-600/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
        aria-label="Previous celebrities"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-red-600/50 hover:bg-red-600/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
        aria-label="Next celebrities"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Celebrity Slider */}
      <div className="overflow-hidden px-12">
        <div
          className="flex transition-all duration-700 ease-out gap-6"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / Math.min(4, celebrities.length))
            }%)`,
          }}
        >
          {celebrities.map((celeb) => (
            <div key={celeb.id} className="flex-none w-1/4">
              <CelebCard celeb={celeb} />
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Indicators */}
      <div className="flex justify-center space-x-3 mt-6">
        {Array.from({ length: Math.max(1, celebrities.length - 3) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-3 bg-gradient-to-r from-red-500 to-red-600 scale-125"
                  : "w-3 h-3 bg-gray-600 hover:bg-gray-500 hover:scale-110"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
};

// Main Component
const Kollywood = () => {
  const handleKnowMore = useCallback((movie) => {
    console.log("Know more about:", movie.title);
    // Handle navigation or modal opening
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-red-700 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Kollywood Movies
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl">
            Discover the finest collection of Tamil cinema featuring
            award-winning films and acclaimed performances.
          </p>
        </div>

        {/* Movies Carousel */}
        <div className="mb-16">
          <MovieCarousel movies={kollywoodMovies} onKnowMore={handleKnowMore} />
        </div>

        {/* Popular Celebrities Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-700 rounded-full"></div>
            <h3 className="text-2xl font-bold text-white">
              Popular Celebrities
            </h3>
          </div>

          {/* Celebrity Carousel */}
          <CelebCarousel celebrities={kollywoodCelebs} />
        </div>
      </div>
    </section>
  );
};

export default Kollywood;
