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
