import http from "../http-common";

class CountryDataService {
  getCountries() {
    return http.get("/countries");
  }
}

export default new CountryDataService();
