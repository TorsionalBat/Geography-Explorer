import React from "react";
import { Typography } from "@mui/material";

export default function Results({ filteredData, guessedCountries }) {
  return (
    <div>
      <Typography variant="h5">Results</Typography>
      <div
        className="scrollable-list"
        style={{ maxHeight: 400, overflowY: "auto" }}
      >
        <ul>
          {filteredData.map((country) =>
            guessedCountries.includes(country.name.common.toLowerCase()) ? (
              <li key={country.cca3} style={{ color: "green" }}>
                {country.name.common}
              </li>
            ) : (
              <li key={country.cca3}>{country.name.common}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
