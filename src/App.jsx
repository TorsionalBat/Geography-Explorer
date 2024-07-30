import Filters from "./components/Filters";
import Guess from "./components/Guess";
import Results from "./components/Results";
import Statistics from "./components/Statistics";
import React from "react";
import CountryFetcher from "./services/CountryFetcher";
import data from "./data";

function App() {
  // Country information that is rendered as the filters change
  const [filteredData, setFilteredData] = React.useState(data);
  const [guess, setGuess] = React.useState(null);
  const [guesses, setGuesses] = React.useState([]);
  const [filters, setFilters] = React.useState({
    startsWith: "",
    contains: "",
    containsExactly: "",
    endsWith: "",
  });

  // Function that acts as an event handler for when the filters are changed
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleGuessChange = (event) => {
    const guess = event.target.value;
    setGuess(guess);
  };

  const handleGuess = (event) => {
    console.log(event.target.value);
  };

  // Effect that is run on initialization of the application, fetches the
  // country data from the API
  // React.useEffect(() => {
  //   CountryFetcher.fetchCountries().then((returnedCountryData) => {
  //     const returnedCountryNames = Object.values(returnedCountryData).map(
  //       (country) => country.name.common
  //     );
  //     setCountries(returnedCountryNames);
  //   });
  // }, []);

  // Effect to be run when the filters change, or the data changes to render the list
  React.useEffect(() => {
    const applyFilters = () => {
      let filtered = data;

      if (filters.startsWith) {
        filtered = filtered.filter((country) =>
          country.name.common
            .toLowerCase()
            .startsWith(filters.startsWith.toLowerCase())
        );
      }

      if (filters.contains) {
        filtered = filtered.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(filters.contains.toLowerCase())
        );
      }

      if (filters.containsExactly) {
        filtered = filtered.filter(
          (country) =>
            country.name.common.toLowerCase() ===
            filters.containsExactly.toLowerCase()
        );
      }

      if (filters.endsWith) {
        filtered = filtered.filter((country) =>
          country.name.common
            .toLowerCase()
            .endsWith(filters.endsWith.toLowerCase())
        );
      }

      setFilteredData(filtered);
    };
    applyFilters();
  }, [filters, data]);

  return (
    <>
      <h1>Geography Explorer</h1>
      <Filters filters={filters} handleFilterChange={handleFilterChange} />
      <Statistics />
      <Guess filteredData={filteredData} />
      <Results filteredData={filteredData} />
    </>
  );
}

export default App;
