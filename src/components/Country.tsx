"use client";

import { useEffect, useState } from "react";
import type { Country } from "@/lib/types";

export default function CountryList() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch("api/countries");
        if (!res.ok) throw new Error("Failed to fetch country");
        const data: Country[] = await res.json();
        setCountries(data);
      } catch (err) {
        console.error("Error fetching countries:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);

  if (loading) return <p>Loading countries...</p>;

  return (
    <div>
      <ul>
        {countries.map((c) => (
          <li key={c.country_id}>{c.country_name}</li>
        ))}
      </ul>
    </div>
  );
}
