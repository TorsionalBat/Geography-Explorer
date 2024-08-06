import React, { useEffect } from "react";
import { Typography, Container, Box, Divider, List } from "@mui/material";
import ResultListItem from "./ResultListItem";

export default function Results({ filteredData, guessedCountries }) {
  const [visibleItems, setVisibleItems] = React.useState({}); // State array to track items that are visible and items that are not

  /* 
    Effect handles determining what countries are visible based on a users guess.
    Runs whenever the filteredData is updated (i.e. a user changes the filters) or
    when the guessedCountries changes (i.e. a user submits a new guess)
  */
  useEffect(() => {
    const newVisibleItems = {};
    guessedCountries.forEach((guessedCountry) => {
      filteredData.forEach((country, index) => {
        // Normalize string before comparison
        if (
          normalizeString(country.name.common.toLowerCase()) ===
          normalizeString(guessedCountry.toLowerCase())
        ) {
          newVisibleItems[index] = true; // Update visible items
        }
      });
    });
    setVisibleItems(newVisibleItems);
  }, [guessedCountries, filteredData]);

  // Helper function to normalize country names (remove non-alphabetical characters for comparison)
  const normalizeString = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[-\s]/g, "");
  };

  // Handles manual toggle of visiblity of result list items
  const handleToggle = (index) => {
    setVisibleItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <Container>
      <Box marginTop={3} marginRight={5}>
        <Typography variant="h4">Results</Typography>
        <Divider />
      </Box>
      <Box marginTop={2} paddingBottom={2}>
        <div
          className="scrollable-list"
          style={{ maxHeight: 410, overflowY: "auto" }}
        >
          <Box marginRight={4}>
            <List>
              {filteredData.map((country, index) => (
                <ResultListItem
                  key={`${country.name.common}--${index}`}
                  country={country}
                  visible={!!visibleItems[index]}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </List>
          </Box>
        </div>
      </Box>
    </Container>
  );
}
