import { Link, NavLink } from "react-router-dom";
import { FaFilm, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-5 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <FaFilm className="text-red-500 text-3xl" />
          <span>MovieMania Blog</span>
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          {["kollywood", "mollywood", "hollywood", "anime", "webseries"].map(
            (route) => (
              <NavLink
                key={route}
                to={`/${route}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 underline"
                    : "hover:text-red-400 transition"
                }
              >
                {route.charAt(0).toUpperCase() + route.slice(1)}
              </NavLink>
            )
          )}
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://www.linkedin.com/in/hariswaran-venkatesh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-600 transition cursor-pointer" />
          </a>
          <a
            href="https://github.com/hariswaran-v"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-400 transition cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/hariswaran.venkatesh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
