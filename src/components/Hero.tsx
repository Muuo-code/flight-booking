"use client";

import React from "react";
import { useEffect, useState } from "react";
import type { City } from "@/lib/types";
import type { FlightClass } from "@/lib/types";
import Image from "next/image";

const Hero = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [flightclasses, setFlightClasses] = useState<FlightClass[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetching Cities
  useEffect(() => {
    async function fetchCities() {
      try {
        const res = await fetch("api/cities");
        if (!res.ok) throw new Error("Failed to fetch city");
        const data: City[] = await res.json();
        setCities(data);
      } catch (err) {
        console.error("Error fetching cities: ", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCities();
  }, []);

  // Fetching Flight Classes
  useEffect(() => {
    async function fetchFlightClasses() {
      try {
        const res = await fetch("api/flightclasses");
        if (!res.ok) throw new Error("Failed to fetch flight classes");
        const data: FlightClass[] = await res.json();
        setFlightClasses(data);
      } catch (err) {
        return console.error("Error fetching flight classes", err);
      }
      setLoading(false);
    }
    fetchFlightClasses();
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <div className="mt-6 py-8 bg-white shadow-md">
      <div className="relative w-full h-[700px]">
        <Image
          src="/images/sky2.jpg"
          alt="Sky Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <div className="max-w-3xl mx-auto px-2 md:px-0">
            <h1 className="text-5xl text-center font-bold drop-shadow-lg">
              Find Your Perfect Flight
            </h1>
            <p className="mt-6 text-xl px-8 text-center justify-center drop-shadow-lg">
              Seacrch, Compare, and book flights from hundreds of airlines
              worldwide. Your next adventure starts here.
            </p>

            <form className="mt-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-7xl flex flex-col gap-4 text-gray-800">
              <div className="flex justify-end">
                <select className="bg-transparent pl-0 pr-6 py-1 text-blue-500 cursor-pointer focus:outline-none">
                  {flightclasses.map((f) => (
                    <option key={f.class_id} value={f.class_name}>
                      {f.class_name}
                    </option>
                  ))}
                </select>
              </div>
              {/* Row 1: inputs */}
              <div className="flex flex-wrap gap-4">
                {/* From */}
                <div>
                  <label className="block text-sm font-medium">From</label>
                  <select className="mt-1 w-full p-2 border rounded">
                    {cities.map((c) => (
                      <option key={c.city_id} value={c.city_name}>
                        {c.city_name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* To */}
                <div>
                  <label className="block text-sm font-medium">To</label>
                  <select className="mt-1 w-full p-2 border rounded">
                    {cities.map((c) => (
                      <option key={c.city_id} value={c.city_name}>
                        {c.city_name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Departure */}
                <div>
                  <label className="block text-sm font-medium">Departure</label>
                  <input
                    type="date"
                    className="mt-1 w-full p-2 border rounded"
                  />
                </div>

                {/* Return */}
                <div>
                  <label className="block text-sm font-medium">Return</label>
                  <input
                    type="date"
                    className="mt-1 w-full p-2 border rounded"
                  />
                </div>

                {/* Passengers */}
                <div>
                  <label className="block text-sm font-medium">
                    Passengers
                  </label>
                  <select className="mt-1 w-full p-2 border rounded">
                    <option>1 Passenger</option>
                    <option>2 Passengers</option>
                    <option>3 Passengers</option>
                  </select>
                </div>
              </div>

              {/* Row 2: trip type + button */}
              <div className="flex items-center justify-between">
                {/* Trip type */}
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="trip" defaultChecked /> Round Trip
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="trip" /> One Way
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-semibold"
                >
                  Search Flights
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
