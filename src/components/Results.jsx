import React from "react";

export default function Results({ filteredData, guessedCountries }) {
  return (
    <div>
      <h3>Results</h3>
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
  );
}
