import Filters from "./components/Filters";
import Guess from "./components/Guess";
import Results from "./components/Results";
import Statistics from "./components/Statistics";
import React from "react";
import Header from "./components/Header";
import CountryFetcher from "./services/CountryFetcher";
import data from "./data";
import { Grid } from "@mui/material";
import "./styles.css";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

function App() {
  // Country information that is rendered as the filters change
  const [filteredData, setFilteredData] = React.useState(data);
  const [filters, setFilters] = React.useState({
    startsWith: "",
    contains: "",
    containsExactly: "",
    endsWith: "",
    dobuleLetter: false,
    singleWords: false,
    continent: "All",
  });
  const [guessedCountries, setGuessedCountries] = React.useState([]);
  const [showConfetti, setShowConfetti] = React.useState(false); // Boolean for confetti animation
  const { width, height } = useWindowSize(); // For confetti animation

  // Function that acts as an event handler for when the filters are changed
  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === "checkbox" ? checked : value,
    }));
    setGuessedCountries([]);
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

  const containsAllLetters = (word, letters) => {
    return [...letters.toLowerCase()].every((letter) =>
      word.toLowerCase().includes(letter)
    );
  };

  // Effect to be run when the filters change, or the data changes to render the list
  React.useEffect(() => {
    const applyFilters = () => {
      let filtered = data;

      if (filters.continent) {
        if (filters.continent === "All") {
          filtered = data;
        } else {
          filtered = filtered.filter((country) =>
            country.continents.includes(filters.continent)
          );
        }
      }

      if (filters.startsWith) {
        filtered = filtered.filter((country) =>
          country.name.common
            .toLowerCase()
            .startsWith(filters.startsWith.toLowerCase())
        );
      }

      if (filters.contains) {
        filtered = filtered.filter((country) =>
          containsAllLetters(country.name.common, filters.contains)
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

      if (filters.doubleLetters) {
        filtered = filtered.filter((country) =>
          /(.)\1/.test(country.name.common)
        );
      }

      if (filters.singleWords) {
        filtered = filtered.filter(
          (country) => country.name.common.split(" ").length === 1
        );
      }
      setFilteredData(filtered);
    };
    applyFilters();
  }, [filters, data, guessedCountries]);

  const handleGuess = (guess) => {
    setGuessedCountries([...guessedCountries, guess.toLowerCase()]);
  };

  React.useEffect(() => {
    const allGuessed = filteredData.every((country) =>
      guessedCountries.includes(country.name.common.toLowerCase())
    );
    if (allGuessed && filteredData.length > 0) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        setGuessedCountries([]);
      }, 6000); // Stop confetti after 5 seconds
    }
  }, [guessedCountries, filteredData]);

  const handleHeaderClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 7000);
  };

  return (
    <>
      <Header handleHeaderClick={handleHeaderClick} />
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={1200}
          recycle={false}
        />
      )}
      <Grid container direction="row" padding={2}>
        <Grid item xs>
          <Filters filters={filters} handleFilterChange={handleFilterChange} />
        </Grid>
        <Grid
          item
          xs={6}
          marginLeft={2}
          marginRight={2}
          sx={{
            backgroundColor: "background.paper",
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Results
            filteredData={filteredData}
            guessedCountries={guessedCountries}
          />
        </Grid>
        <Grid item xs>
          <Guess filteredData={filteredData} handleGuess={handleGuess} />
          <Statistics filteredData={filteredData} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
