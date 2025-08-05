import React, { useState, useCallback, memo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  Calendar,
  Eye,
  Award,
  Users,
} from "lucide-react";
import { moviesList } from "../data/moviesList";
import { celebrities } from "../data/celebsList";

// Mock data for Mollywood movies with detailed information
// const mollywoodMovies = [
//   {
//     id: 1,
//     title: "Aavesham",
//     image:
//       "https://images.unsplash.com/photo-1489599904653-b3b90754a1ef?w=400&h=600&fit=crop",
//     year: "2024",
//     rating: 8.6,
//     genre: "Action Comedy",
//     director: "Jithu Madhavan",
//     language: "Malayalam",
//   },
//   {
//     id: 2,
//     title: "Charlie",
//     image:
//       "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
//     year: "2015",
//     rating: 8.2,
//     genre: "Adventure Drama",
//     director: "Martin Prakkat",
//     language: "Malayalam",
//   },
//   {
//     id: 3,
//     title: "CIA",
//     image:
//       "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
//     year: "2017",
//     rating: 7.8,
//     genre: "Political Thriller",
//     director: "Amal Neerad",
//     language: "Malayalam",
//   },
//   {
//     id: 4,
//     title: "Guruvayoor Ambalanadayil",
//     image:
//       "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
//     year: "2024",
//     rating: 8.1,
//     genre: "Comedy Drama",
//     director: "Vipin Das",
//     language: "Malayalam",
//   },
//   {
//     id: 5,
//     title: "Jaya Jaya Jaya Jaya Hey",
//     image:
//       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
//     year: "2022",
//     rating: 8.4,
//     genre: "Comedy Drama",
//     director: "Vipin Das",
//     language: "Malayalam",
//   },
//   {
//     id: 6,
//     title: "Kannur Squad",
//     image:
//       "https://images.unsplash.com/photo-1594736797933-d0051ba2fe65?w=400&h=600&fit=crop",
//     year: "2023",
//     rating: 8.7,
//     genre: "Crime Thriller",
//     director: "Roby Varghese Raj",
//     language: "Malayalam",
//   },
//   {
//     id: 7,
//     title: "The Family Man",
//     image:
//       "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=600&fit=crop",
//     year: "2021",
//     rating: 7.9,
//     genre: "Family Drama",
//     director: "Joji Thomas",
//     language: "Malayalam",
//   },
//   {
//     id: 8,
//     title: "Premalu",
//     image:
//       "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=600&fit=crop",
//     year: "2024",
//     rating: 8.8,
//     genre: "Romantic Comedy",
//     director: "Girish A.D.",
//     language: "Malayalam",
//   },
//   {
//     id: 9,
//     title: "Premam",
//     image:
//       "https://images.unsplash.com/photo-1489599904653-b3b90754a1ef?w=400&h=600&fit=crop",
//     year: "2015",
//     rating: 8.9,
//     genre: "Romantic Drama",
//     director: "Alphonse Puthren",
//     language: "Malayalam",
//   },
//   {
//     id: 10,
//     title: "Vaazha",
//     image:
//       "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
//     year: "2024",
//     rating: 8.3,
//     genre: "Comedy Drama",
//     director: "Anand Menen",
//     language: "Malayalam",
//   },
// ];

const { mollywoodMovies } = moviesList;
const { mollywoodCelebs } = celebrities;

// const mollywoodCelebs = [
//   {
//     id: 1,
//     name: "Fahadh Faasil",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
//     movies: 42,
//     awards: 8,
//     specialty: "Method Acting",
//   },
//   {
//     id: 2,
//     name: "Dulquer Salmaan",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
//     movies: 35,
//     awards: 6,
//     specialty: "Versatile Actor",
//   },
//   {
//     id: 3,
//     name: "Nivin Pauly",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
//     movies: 28,
//     awards: 5,
//     specialty: "Romantic Lead",
//   },
//   {
//     id: 4,
//     name: "Parvathy Thiruvothu",
//     image:
//       "https://images.unsplash.com/photo-1494790108755-2616b612b278?w=200&h=200&fit=crop",
//     movies: 24,
//     awards: 7,
//     specialty: "Character Artist",
//   },
// ];

// Enhanced Movie Card Component
const MovieCard = memo(({ movie, onKnowMore }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative bg-gradient-to-br from-emerald-900/20 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-emerald-500/20 hover:border-emerald-500/40">
      {/* Movie Poster */}
      <div className="relative aspect-[3/4] overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
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

        {/* Emerald Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>{movie.year}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{movie.rating}</span>
              </div>
            </div>
            <div className="mt-2 text-emerald-300 text-xs">
              {movie.language} • {movie.genre}
            </div>
          </div>
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
            <Play className="w-6 h-6 ml-1" />
          </button>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span>{movie.rating}</span>
        </div>

        {/* Language Badge */}
        <div className="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-semibold">
          {movie.language}
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 line-clamp-1 group-hover:text-emerald-400 transition-colors">
          {movie.title}
        </h3>
        <p className="text-gray-400 text-sm mb-1">{movie.genre}</p>
        <p className="text-gray-500 text-xs mb-3">Dir: {movie.director}</p>

        <button
          onClick={() => onKnowMore(movie)}
          className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
        >
          <Eye className="w-4 h-4" />
          <span>Know More</span>
        </button>
      </div>
    </div>
  );
});

// Enhanced Celebrity Card Component
const CelebCard = memo(({ celeb }) => {
  return (
    <div className="group bg-gradient-to-br from-emerald-900/20 to-gray-900 rounded-xl p-5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-500/20 hover:border-emerald-500/40">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={celeb.image}
            alt={celeb.name}
            className="w-20 h-20 rounded-full object-cover border-3 border-emerald-500/50 group-hover:border-emerald-500 transition-colors"
            loading="lazy"
          />
          <div className="absolute -bottom-2 -right-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
            <Award className="w-3 h-3" />
            <span>{celeb.awards}</span>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-1">
            {celeb.name}
          </h4>
          <p className="text-emerald-300 text-sm mb-2">{celeb.specialty}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{celeb.movies} Movies</span>
            </div>
            <div className="flex items-center space-x-1">
              <Award className="w-4 h-4" />
              <span>{celeb.awards} Awards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// Custom Carousel Component
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
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-emerald-600/50 hover:bg-emerald-600/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
        aria-label="Previous movies"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-emerald-600/50 hover:bg-emerald-600/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
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
                  ? "bg-emerald-500 scale-125"
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

// Main Mollywood Component
const Mollywood = () => {
  const handleKnowMore = useCallback((movie) => {
    console.log("Know more about:", movie.title);
    // Handle navigation or modal opening
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-950/20 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Mollywood Movies
            </h2>
            <div className="hidden md:block px-3 py-1 bg-emerald-600/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium">
              Malayalam Cinema
            </div>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl">
            Experience the rich storytelling tradition of Malayalam cinema with
            critically acclaimed films and exceptional performances from God's
            Own Country.
          </p>
        </div>

        {/* Movies Carousel */}
        <div className="mb-16">
          <MovieCarousel movies={mollywoodMovies} onKnowMore={handleKnowMore} />
        </div>

        {/* Popular Celebrities Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
            <h3 className="text-2xl font-bold text-white">Mollywood Stars</h3>
            <div className="hidden md:block px-3 py-1 bg-emerald-600/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium">
              Featured Artists
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mollywoodCelebs.map((celeb) => (
              <CelebCard key={celeb.id} celeb={celeb} />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-6 bg-emerald-900/20 rounded-xl border border-emerald-500/20">
            <div className="text-2xl font-bold text-emerald-400 mb-2">150+</div>
            <div className="text-gray-400 text-sm">Movies Featured</div>
          </div>
          <div className="text-center p-6 bg-emerald-900/20 rounded-xl border border-emerald-500/20">
            <div className="text-2xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-gray-400 text-sm">Award Winners</div>
          </div>
          <div className="text-center p-6 bg-emerald-900/20 rounded-xl border border-emerald-500/20">
            <div className="text-2xl font-bold text-emerald-400 mb-2">25+</div>
            <div className="text-gray-400 text-sm">Directors</div>
          </div>
          <div className="text-center p-6 bg-emerald-900/20 rounded-xl border border-emerald-500/20">
            <div className="text-2xl font-bold text-emerald-400 mb-2">8.5</div>
            <div className="text-gray-400 text-sm">Avg Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mollywood;
