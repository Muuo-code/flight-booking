import React from "react";

const NavItems = [
  { id: "flights", label: "Flights" },
  { id: "hotels", label: "Hotels" },
  { id: "carrental", label: "Car Rentals" },
  { id: "packages", label: "Packages" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0  w-full z-50  bg-white/80 backdrop-blur-2xl shadow-md">
      <div className="px-4 md:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center space-x-8">
          {/* Left side: logo + nav links */}
          <div className="flex items-baseline space-x-8">
            <span className="text-2xl font-bold text-blue-600 flex-shrink-0">
              SkyBooker
            </span>
            <div className="hidden md:flex space-x-8">
              {NavItems.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-bold"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right side: sign in */}
          <div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
