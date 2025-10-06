export const SP = {
  // Country
  saveCountry: "CALL sp_savecountry(?, ?)",
  getCountry: "CALL sp_getcountry()",
  getCountryDetails: "CALL sp_getcountrydetails(?)",
  deleteCountry: "CALL sp_deletecountry()",

  // City
  saveCity: "CALL sp_savecity(?, ?, ?)",
  getCities: "CALL sp_getcities()",
  getCityDetails: "CALL sp_getcitydetails(?)",
  deleteCity: "CALL sp_deletecity()",

  // Airport
  saveAirport: "CALL sp_saveairport(?, ?, ?, ?, ?)",
  getAirports: "CALL sp_getairports()",
  getAirportDetails: "CALL sp_getairportdetails(?)",
  deleteAirport: "CALL sp_deleteairport()",

  // Users
  saveUser: "CALL sp_saveuser(?, ?, ?, ?, ?, ?, ?)",
  getUsers: "CALL sp_getusers()",
  getUserDetail: "CALL sp_getuserdetail(?)",
  deleteUser: "CALL sp_deleteairport()",

  //Airline
  saveAirline: "CALL sp_saveairline(?, ?, ?, ?)",
  getAirline: "CALL sp_getairline()",
  getAirlineDetail: "CALL sp_getairlinedetails(?)",
  deleteAirline: "CALL sp_deleteairline()",
};
