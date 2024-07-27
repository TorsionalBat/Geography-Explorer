import Filters from "./components/Filters";
import Guess from "./components/Guess";
import Results from "./components/Results";
import Statistics from "./components/Statistics";
import React from "react";
import CountryFetcher from "./services/CountryFetcher";
import data from "./data";

function App() {
  const [filteredData, setFilteredData] = React.useState(data);
  const [filters, setFilters] = React.useState({
    startsWith: "",
    contains: "",
    containsExactly: "",
    endsWith: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // React.useEffect(() => {
  //   CountryFetcher.fetchCountries().then((returnedCountryData) => {
  //     const returnedCountryNames = Object.values(returnedCountryData).map(
  //       (country) => country.name.common
  //     );
  //     setCountries(returnedCountryNames);
  //   });
  // }, []);

  return (
    <>
      <h1>New app</h1>
      <Filters filters={filters} handleFilterChange={handleFilterChange} />
      <Guess />
      <Results filteredData={filteredData} />
      <Statistics />
    </>
  );
}

export default App;
