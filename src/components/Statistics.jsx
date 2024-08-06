import React from "react";
import StatisticCard from "./StatisticCard";
import { Grid, Box } from "@mui/material";

export default function Statistics({ filteredData }) {
  const [statistics, setStatistics] = React.useState({
    easyCount: 0,
    mediumCount: 0,
    hardCount: 0,
    numberOfContinents: 0,
  });

  /*
    Helper function that takes the rendered list of results/countries and determines relevant statistics to be displayed
  */
  const countCountriesByDifficulty = (list) => {
    if (!list) {
      return; // If not defined
    }
    // Thresholds that determine whether a country is regarded as easy, medium or hard
    const hardThreshold = 500000;
    const mediumThreshold = 15000000;
    let easyCount = 0;
    let mediumCount = 0;
    let hardCount = 0;

    const continentsSet = new Set(); // Keep track of the different continents within the list - items can only occur once in a set

    list.forEach((country) => {
      const population = country.population;
      country.continents.forEach((continent) => {
        continentsSet.add(continent); // add() only adds if there isn't an element with the same value in the set
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

  /* 
    Effect used to ensure that when the dependency array changes (new data is filtered) that the statistics are re-rendered
  */
  React.useEffect(() => {
    const newStats = countCountriesByDifficulty(filteredData); // Calculate statistics
    setStatistics(newStats); // Update the statistics
  }, [filteredData]);

  return (
    <Grid
      padding={2}
      marginTop={2}
      sx={{ bgcolor: "background.paper", boxShadow: 1, borderRadius: 2 }}
    >
      <Box>
        <StatisticCard
          number={filteredData.length}
          description="Countries"
          visible={true}
        />
        <StatisticCard
          number={statistics.numberOfContinents}
          description="Continents"
          visible={false}
        />
        <StatisticCard
          number={statistics.easyCount}
          description="Easy"
          visible={false}
        />
        <StatisticCard
          number={statistics.mediumCount}
          description="Medium"
          visible={false}
        />
        <StatisticCard
          number={statistics.hardCount}
          description="Difficult"
          visible={false}
        />
      </Box>
    </Grid>
  );
}
