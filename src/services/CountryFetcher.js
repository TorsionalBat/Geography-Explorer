import axios from "axios";

const url = "https://restcountries.com/v3.1/all";

const fetchCountries = () => {
  axios.get(url).then((response) => {
    return response.data;
  });
};

export default { fetchCountries };
