import React from "react";

export default function Results({ filteredData }) {
  return (
    <div>
      <h3>Results</h3>
      <ul>
        {filteredData.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}
