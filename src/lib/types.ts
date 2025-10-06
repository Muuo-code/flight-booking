// Country
export interface Country {
  country_id: number;
  country_name: string;
}
export interface SaveCountryBody {
  country_id?: number;
  country_name: string;
}

//City
export interface City {
  city_id: number;
  city_name: string;
  country_id: number;
}
export interface SaveCityBody {
  city_id?: number;
  city_name: string;
  country_id: number;
}

//Airport
export interface Airport {
  airport_id: number;
  airport_name: string;
  airport_code: string;
  city_id: number;
  timezone: string;
}

export interface SaveAirportBody {
  airport_id?: number;
  airport_name: string;
  airport_code: string;
  city_id: number;
  timezone: string;
}

// Users
export interface User {
  user_id: number;
  full_name: string;
  email: string;
  password: string;
  phone_number: string | null;
  nationality: string | null;
  date_of_birth: string | null;
}

export interface SaveUserBody {
  user_id?: number;
  full_name: string;
  email: string;
  password: string;
  phone_number: string | null;
  nationality: string | null;
  date_of_birth: string | null;
}

// Airline
export interface Airline {
  airline_id: number;
  airline_name: string;
  airline_code: string;
  logo_url: string;
}

export interface SaveAirlineBody {
  airline_id?: number;
  airline_name: string;
  airline_code: string;
  logo_url: string;
}

//Flight Classes
export interface FlightClass {
  class_id: number;
  class_name: string;
  description: string;
}

export interface SaveFlightClassBody {
  class_id?: number;
  class_name: string;
  description: string;
}
