import React, { useState, useCallback, memo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  Calendar,
  Eye,
  DollarSign,
  Clock,
  Trophy,
  Film,
} from "lucide-react";
import { moviesList } from "../data/moviesList";
import { celebrities } from "../data/celebsList";

const { hollywoodMovies } = moviesList;
const { hollywoodCelebs } = celebrities;

// Premium Movie Card Component
const MovieCard = memo(({ movie, onKnowMore }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getRatingColor = (rating) => {
    if (rating >= 8.0) return "text-green-400";
    if (rating >= 7.0) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="group relative bg-gradient-to-br from-blue-900/20 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-500/20 hover:border-blue-500/40">
      {/* Movie Poster */}
      <div className="relative aspect-[2] overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
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

        {/* Hollywood Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-white text-sm mb-2">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>{movie.year}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className={getRatingColor(movie.rating)}>
                  {movie.rating}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-blue-300 text-xs">
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{movie.runtime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <DollarSign className="w-3 h-3" />
                <span>{movie.boxOffice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
            <Play className="w-6 h-6 ml-1" />
          </button>
        </div>

        {/* Rating Badge */}
        <div
          className={`absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1`}
        >
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span className={getRatingColor(movie.rating)}>{movie.rating}</span>
        </div>

        {/* Studio Badge */}
        <div className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-semibold">
          {movie.studio}
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 line-clamp-1 group-hover:text-blue-400 transition-colors">
          {movie.title}
        </h3>
        <p className="text-gray-400 text-sm mb-1">{movie.genre}</p>
        <p className="text-gray-500 text-xs mb-3">Dir: {movie.director}</p>

        <button
          onClick={() => onKnowMore(movie)}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
        >
          <Eye className="w-4 h-4" />
          <span>Watch Trailer</span>
        </button>
      </div>
    </div>
  );
});

// Hollywood Celebrity Card Component
const CelebCard = memo(({ celeb }) => {
  return (
    <div className="group bg-gradient-to-br from-blue-900/20 to-gray-900 rounded-xl p-5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-500/20 hover:border-blue-500/40">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={celeb.image}
            alt={celeb.name}
            className="w-20 h-20 rounded-full object-cover border-3 border-blue-500/50 group-hover:border-blue-500 transition-colors"
            loading="lazy"
          />
          <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
            <Trophy className="w-3 h-3" />
            <span>{celeb.awards}</span>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
            {celeb.name}
          </h4>
          <p className="text-blue-300 text-sm mb-2">{celeb.specialty}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Film className="w-4 h-4" />
              <span>{celeb.movies} Movies</span>
            </div>
            <div className="flex items-center space-x-1">
              <DollarSign className="w-4 h-4" />
              <span>{celeb.netWorth}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// Custom Hollywood Carousel Component
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

    const interval = setInterval(nextSlide, 4500);
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
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600/50 hover:bg-blue-600/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
        aria-label="Previous movies"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600/50 hover:bg-blue-600/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
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
              currentIndex * (100 / Math.min(4, movies.length))
            }%)`,
          }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none w-1/4 min-w-[280px]">
              <MovieCard movie={movie} onKnowMore={onKnowMore} />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: Math.max(1, movies.length - 3) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-500 scale-125"
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

// Main Hollywood Component
const Hollywood = () => {
  const handleKnowMore = useCallback((movie) => {
    console.log("Watch trailer for:", movie.title);
    // Handle navigation or modal opening for trailers
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950/20 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Hollywood Blockbusters
            </h2>
            <div className="hidden md:block px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
              Premium Collection
            </div>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl">
            Experience the world's biggest blockbusters and award-winning films
            from the entertainment capital of the world. From superhero epics to
            psychological thrillers.
          </p>
        </div>

        {/* Movies Carousel */}
        <div className="mb-16">
          <MovieCarousel movies={hollywoodMovies} onKnowMore={handleKnowMore} />
        </div>

        {/* Popular Celebrities Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></div>
            <h3 className="text-2xl font-bold text-white">
              Hollywood A-Listers
            </h3>
            <div className="hidden md:block px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
              Top Earners
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hollywoodCelebs.map((celeb) => (
              <CelebCard key={celeb.id} celeb={celeb} />
            ))}
          </div>
        </div>

        {/* Hollywood Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-6 bg-blue-900/20 rounded-xl border border-blue-500/20">
            <div className="text-2xl font-bold text-blue-400 mb-2">$15B+</div>
            <div className="text-gray-400 text-sm">Total Box Office</div>
          </div>
          <div className="text-center p-6 bg-blue-900/20 rounded-xl border border-blue-500/20">
            <div className="text-2xl font-bold text-blue-400 mb-2">95+</div>
            <div className="text-gray-400 text-sm">Oscar Winners</div>
          </div>
          <div className="text-center p-6 bg-blue-900/20 rounded-xl border border-blue-500/20">
            <div className="text-2xl font-bold text-blue-400 mb-2">8</div>
            <div className="text-gray-400 text-sm">Major Studios</div>
          </div>
          <div className="text-center p-6 bg-blue-900/20 rounded-xl border border-blue-500/20">
            <div className="text-2xl font-bold text-blue-400 mb-2">7.8</div>
            <div className="text-gray-400 text-sm">Avg Rating</div>
          </div>
        </div>

        {/* Genre Tags */}
        <div className="mt-12">
          <h4 className="text-lg font-semibold text-white mb-4">
            Popular Genres
          </h4>
          <div className="flex flex-wrap gap-3">
            {[
              "Superhero",
              "Action",
              "Thriller",
              "Sci-Fi",
              "Drama",
              "Comedy",
              "Horror",
              "Fantasy",
            ].map((genre) => (
              <span
                key={genre}
                className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium hover:bg-blue-600/30 transition-colors cursor-pointer"
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

export default Hollywood;
