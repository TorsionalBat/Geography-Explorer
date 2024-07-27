import axios from "axios";

const url = "https://restcountries.com/v3.1/all";

const fetchCountries = () => {
  return axios.get(url).then((response) => response.data);
};

export default { fetchCountries };
