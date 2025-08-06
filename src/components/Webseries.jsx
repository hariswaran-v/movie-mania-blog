import React, { useState, useCallback, memo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  Calendar,
  Clock,
  Users,
  TrendingUp,
  Award,
  MonitorPlay,
  Tv,
} from "lucide-react";

// Enhanced web series data with more details
const webSeriesList = [
  {
    id: 1,
    title: "Farzi",
    image: "/assets/images/card-img/webseries/img-1.jpg",
    rating: 8.7,
    year: 2023,
    seasons: 1,
    episodes: 8,
    genre: "Crime, Thriller",
    platform: "Prime Video",
    country: "India",
    language: "Hindi",
    creator: "Raj & DK",
  },
  {
    id: 2,
    title: "Suzhal",
    image: "/assets/images/card-img/webseries/img-2.jpg",
    rating: 8.4,
    year: 2022,
    seasons: 1,
    episodes: 8,
    genre: "Mystery, Crime",
    platform: "Prime Video",
    country: "India",
    language: "Tamil",
    creator: "Pushkar & Gayatri",
  },
  {
    id: 3,
    title: "Money Heist",
    image: "/assets/images/card-img/webseries/img-3.jpg",
    rating: 9.1,
    year: 2017,
    seasons: 5,
    episodes: 41,
    genre: "Crime, Drama",
    platform: "Netflix",
    country: "Spain",
    language: "Spanish",
    creator: "Álex Pina",
  },
  {
    id: 4,
    title: "Mirzapur",
    image: "/assets/images/card-img/webseries/img-4.jpg",
    rating: 8.9,
    year: 2018,
    seasons: 3,
    episodes: 29,
    genre: "Crime, Action",
    platform: "Prime Video",
    country: "India",
    language: "Hindi",
    creator: "Puneet Krishna",
  },
  {
    id: 5,
    title: "Leabel",
    image: "/assets/images/card-img/webseries/img-5.jpg",
    rating: 8.2,
    year: 2023,
    seasons: 1,
    episodes: 6,
    genre: "Drama, Thriller",
    platform: "Netflix",
    country: "India",
    language: "Telugu",
    creator: "Karthik Rapolu",
  },
];

// Professional Web Series Card Component
const WebSeriesCard = memo(({ series, onWatchClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getRatingColor = (rating) => {
    if (rating >= 9.0) return "text-green-400";
    if (rating >= 8.0) return "text-yellow-400";
    return "text-orange-400";
  };

  const getPlatformColor = (platform) => {
    switch (platform) {
      case "Netflix":
        return "bg-red-600";
      case "Prime Video":
        return "bg-blue-600";
      case "Disney+":
        return "bg-indigo-600";
      default:
        return "bg-purple-600";
    }
  };

  return (
    <div className="group relative bg-gradient-to-br from-cyan-900/30 to-blue-900/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-cyan-500/20 hover:border-cyan-400/50">
      {/* Series Poster */}
      <div className="relative aspect-[2] overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-800 to-blue-800 animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-cyan-800 to-blue-800 flex items-center justify-center">
            <div className="text-center text-cyan-300">
              <MonitorPlay className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Image not available</p>
            </div>
          </div>
        ) : (
          <img
            src={series.image}
            alt={series.title}
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
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>{series.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tv className="w-4 h-4 text-blue-400" />
                <span>
                  {series.seasons}S • {series.episodes}E
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-cyan-300">
              <span>{series.language}</span>
              <span>{series.country}</span>
            </div>
          </div>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => onWatchClick(series)}
            className="bg-cyan-600/90 hover:bg-cyan-600 text-white p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg backdrop-blur-sm"
          >
            <Play className="w-6 h-6 ml-1" />
          </button>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl text-sm font-bold flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className={getRatingColor(series.rating)}>{series.rating}</span>
        </div>

        {/* Platform Badge */}
        <div
          className={`absolute top-3 left-3 ${getPlatformColor(
            series.platform
          )} text-white px-2 py-1 rounded-lg text-xs font-semibold`}
        >
          {series.platform}
        </div>

        {/* New/Trending Badge */}
        {series.year >= 2023 && (
          <div className="absolute top-12 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1">
            <TrendingUp className="w-3 h-3" />
            <span>New</span>
          </div>
        )}
      </div>

      {/* Series Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {series.title}
        </h3>
        <p className="text-cyan-300 text-sm mb-1 font-medium">{series.genre}</p>
        <p className="text-gray-400 text-xs mb-3">
          Created by {series.creator}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>
              {series.seasons} Season{series.seasons > 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-3 h-3" />
            <span>{series.episodes} Episodes</span>
          </div>
        </div>

        <button
          onClick={() => onWatchClick(series)}
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 shadow-lg"
        >
          <Play className="w-4 h-4" />
          <span>Watch Series</span>
        </button>
      </div>
    </div>
  );
});

// Custom Carousel Component with RTL support
const WebSeriesCarousel = ({ series, onWatchClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, series.length - 2));
  }, [series.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, series.length - 2)) %
        Math.max(1, series.length - 2)
    );
  }, [series.length]);

  // Auto-play effect with reverse direction
  React.useEffect(() => {
    if (!isAutoPlaying || series.length <= 3) return;

    const interval = setInterval(() => {
      // Reverse direction for RTL feel
      setCurrentIndex(
        (prev) =>
          (prev - 1 + Math.max(1, series.length - 2)) %
          Math.max(1, series.length - 2)
      );
    }, 4200);

    return () => clearInterval(interval);
  }, [isAutoPlaying, series.length]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Buttons */}
      {series.length > 3 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-cyan-600/70 hover:bg-cyan-600/90 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-xl"
            aria-label="Previous series"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-cyan-600/70 hover:bg-cyan-600/90 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-xl"
            aria-label="Next series"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Series Grid */}
      <div className="overflow-hidden px-12">
        <div
          className="flex transition-transform duration-700 ease-out gap-8"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / Math.min(3, series.length))
            }%)`,
          }}
        >
          {series.map((seriesItem) => (
            <div key={seriesItem.id} className="flex-none w-1/3 min-w-[300px]">
              <WebSeriesCard series={seriesItem} onWatchClick={onWatchClick} />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      {series.length > 3 && (
        <div className="flex justify-center space-x-3 mt-8">
          {Array.from({ length: Math.max(1, series.length - 2) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-cyan-500 scale-125 shadow-lg"
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

// Main Professional Web Series Component
const Webseries = () => {
  const handleWatchClick = useCallback((series) => {
    console.log("Watch series:", series.title);
    // Handle navigation or modal opening for series watching
  }, []);

  const topRatedSeries = webSeriesList.filter((series) => series.rating >= 8.5);
  const platformStats = webSeriesList.reduce((acc, series) => {
    acc[series.platform] = (acc[series.platform] || 0) + 1;
    return acc;
  }, {});

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-950/30 to-blue-950/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-32 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-1.5 h-10 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Web{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Series
                </span>
              </h2>
              <div className="flex items-center space-x-4">
                <span className="px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold">
                  Binge-Worthy Collection
                </span>
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">Critics' Choice</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            Immerse yourself in compelling narratives and character-driven
            stories. From international hits to regional masterpieces, explore
            premium web series across multiple platforms and languages.
          </p>
        </div>

        {/* Web Series Carousel */}
        <div className="mb-16">
          <WebSeriesCarousel
            series={webSeriesList}
            onWatchClick={handleWatchClick}
          />
        </div>

        {/* Featured Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-cyan-900/20 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              {webSeriesList.length}+
            </div>
            <div className="text-gray-400 text-sm">Premium Series</div>
          </div>
          <div className="text-center p-6 bg-cyan-900/20 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {topRatedSeries.length}
            </div>
            <div className="text-gray-400 text-sm">High Rated</div>
          </div>
          <div className="text-center p-6 bg-cyan-900/20 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              {Object.keys(platformStats).length}
            </div>
            <div className="text-gray-400 text-sm">Platforms</div>
          </div>
          <div className="text-center p-6 bg-cyan-900/20 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Streaming</div>
          </div>
        </div>

        {/* Platform & Language Tags */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Platforms */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <MonitorPlay className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">
                Streaming Platforms
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {Object.keys(platformStats).map((platform) => (
                <span
                  key={platform}
                  className="px-5 py-2.5 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium hover:from-cyan-600/30 hover:to-blue-600/30 transition-all duration-300 cursor-pointer hover:scale-105 backdrop-blur-sm"
                >
                  {platform} ({platformStats[platform]})
                </span>
              ))}
            </div>
          </div>

          {/* Genres */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Award className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Popular Genres</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Crime",
                "Thriller",
                "Drama",
                "Mystery",
                "Action",
                "Comedy",
                "Romance",
                "Sci-Fi",
                "Historical",
                "Biography",
              ].map((genre) => (
                <span
                  key={genre}
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300 cursor-pointer hover:scale-105 backdrop-blur-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webseries;
