import Filters from "./components/Filters";
import Guess from "./components/Guess";
import Results from "./components/Results";
import Statistics from "./components/Statistics";
import React from "react";
import CountryFetcher from "./services/CountryFetcher";
import data from "./data";

function App() {
  const [filteredData, setFilteredData] = React.useState(data);

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
      <Filters />
      <Guess />
      <Results />
      <Statistics />
      <ul>
        {filteredData.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
