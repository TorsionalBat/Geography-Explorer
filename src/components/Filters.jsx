import React from "react";

export default function Filters({ filters, handleFilterChange }) {
  return (
    <div>
      <h3>Filters</h3>
      <div>
        <input
          type="text"
          name="startsWith"
          value={filters.startsWith}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="contains"
          value={filters.contains}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="containsExactly"
          value={filters.containsExactly}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="endsWith"
          value={filters.endsWith}
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
}
