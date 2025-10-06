import Image from "next/image";
import React from "react";
import { FaSearch, FaShieldAlt, FaHeadset } from "react-icons/fa";

const images = [
  { src: "/images/more/paris.jpg", id: "paris", label: "Paris", price: 599 },
  { src: "/images/more/tokyo1.jpg", id: "tokyo", label: "Tokyo", price: 899 },
  {
    src: "/images/more/newyork.jpg",
    id: "newyork",
    label: "New York",
    price: 399,
  },
  { src: "/images/more/london.jpg", id: "london", label: "London", price: 499 },
];

const More = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto min-h-screen flex justify-center">
        <div className="space-y-4 md:space-y-6 text-center">
          <h1 className="text-3xl text-gray-900 font-bold">
            Popular Destinations
          </h1>
          <p className="text-lg text-gray-500 font-semibold">
            Discover amazing places around the world with our best flight deals
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 px-2 md:gap-6 py-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-xl"
              >
                <Image
                  src={image.src}
                  alt={image.label}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-4 flex flex-col items-start text-white">
                  <h1 className="font-bold">{image.label}</h1>
                  <p className="text-sm">
                    <span className="text-gray-400 font-semibold">From </span>
                    <span className="text-white font-semibold">
                      ${image.price}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-10">
            <h2 className="text-3xl text-gray-900 font-bold tracking-wide">
              Why Choose SkyBooker?
            </h2>
            <p className="text-gray-700 py-4 tracking-wide">
              We make flight booking simple, fast, and reliable
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 py-4">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#1e40af] text-white p-4 rounded-full mb-3">
                <FaSearch className="text-2xl" />
              </div>
              <h3 className="text-lg font-semibold tracking-wide text-gray-800">
                Easy Search
              </h3>
              <p className="text-gray-700 py-2 text-sm tracking-wide">
                Find flights from hundreds of airlines with our powerful search
                engine
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#f97316] text-white p-4 rounded-full mb-3">
                <FaShieldAlt className="text-2xl" />
              </div>
              <h3 className="text-lg font-semibold tracking-wide text-gray-800">
                Secure Booking
              </h3>
              <p className="text-gray-700 py-2 text-sm tracking-wide">
                Your payment and personal information are always protected
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#0891b2] text-white p-4 rounded-full mb-3">
                <FaHeadset className="text-2xl" />
              </div>
              <h3 className="text-lg font-semibold tracking-wide text-gray-800">
                24/7 Support
              </h3>
              <p className="text-gray-700 py-2 text-sm tracking-wide">
                Get help whenever you need it with our round-the-clock customer
                service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
