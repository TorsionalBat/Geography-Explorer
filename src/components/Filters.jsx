import React from "react";
import { Typography } from "@mui/material";

export default function Filters({ filters, handleFilterChange }) {
  return (
    <div>
      <Typography variant="h5">Filters</Typography>
      <div>
        <input
          type="text"
          name="startsWith"
          value={filters.startsWith}
          onChange={handleFilterChange}
          placeholder="Starts With"
        />
        <input
          type="text"
          name="contains"
          value={filters.contains}
          onChange={handleFilterChange}
          placeholder="Contains"
        />
        <input
          type="text"
          name="containsExactly"
          value={filters.containsExactly}
          onChange={handleFilterChange}
          placeholder="Contains Exactly"
        />
        <input
          type="text"
          name="endsWith"
          value={filters.endsWith}
          onChange={handleFilterChange}
          placeholder="Ends With"
        />
        {/* <label>
          <input
            type="checkbox"
            name="openLetters"
            checked={filters.openLetters}
            onChange={handleFilterChange}
          />
          Open Letters
        </label>
        <label>
          <input
            type="checkbox"
            name="uppercase"
            checked={filters.uppercase}
            onChange={handleFilterChange}
          />
          Uppercase
        </label> */}
        <select
          name="continent"
          //   value={filters.continent}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
