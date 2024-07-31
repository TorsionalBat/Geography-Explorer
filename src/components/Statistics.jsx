import React from "react";
import { Typography, Grid, Box } from "@mui/material";

export default function Statistics({ filteredData }) {
  const [statistics, setStatistics] = React.useState({
    easyCount: 0,
    mediumCount: 0,
    hardCount: 0,
    numberOfContinents: 0,
  });

  const countCountriesByDifficulty = (list) => {
    if (!list) {
      return;
    }
    const hardThreshold = 500000;
    const mediumThreshold = 15000000;
    let easyCount = 0;
    let mediumCount = 0;
    let hardCount = 0;

    const continentsSet = new Set();

    list.forEach((country) => {
      const population = country.population;
      country.continents.forEach((continent) => {
        continentsSet.add(continent);
      });

      if (population <= hardThreshold) {
        hardCount++;
      } else if (population <= mediumThreshold && population >= hardThreshold) {
        mediumCount++;
      } else {
        easyCount++;
      }
    });

    let numberOfContinents = continentsSet.size;

    return { easyCount, mediumCount, hardCount, numberOfContinents };
  };

  React.useEffect(() => {
    const newStats = countCountriesByDifficulty(filteredData);
    setStatistics(newStats);
  }, [filteredData]);

  return (
    <Grid
      padding={2}
      marginTop={2}
      sx={{ bgcolor: "background.paper", boxShadow: 1, borderRadius: 2 }}
    >
      <Box>
        <Typography variant="h5">Statistics</Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        <p>Number of Countries: {filteredData.length}</p>
        <p>Number of Easy: {statistics.easyCount} </p>
        <p>Number of Medium: {statistics.mediumCount} </p>
        <p>Number of Difficult: {statistics.hardCount} </p>
        <p>Number of Continents: {statistics.numberOfContinents} </p>
      </Box>
    </Grid>
  );
}
