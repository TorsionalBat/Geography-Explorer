import React from "react";
import {
  Typography,
  Grid,
  Box,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

export default function Filters({ filters, handleFilterChange }) {
  return (
    <Grid
      padding={2}
      sx={{ bgcolor: "background.paper", boxShadow: 1, borderRadius: 2 }}
    >
      <Box display="flex">
        <Typography variant="h5">Filters</Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap={1.5} marginTop={2}>
        <TextField
          type="text"
          name="startsWith"
          value={filters.startsWith}
          onChange={handleFilterChange}
          label="Starts With"
          size="small"
        />
        <TextField
          type="text"
          name="contains"
          value={filters.contains}
          onChange={handleFilterChange}
          label="Contains"
          size="small"
        />
        <TextField
          type="text"
          name="containsExactly"
          value={filters.containsExactly}
          onChange={handleFilterChange}
          label="Contains Exactly"
          size="small"
        />
        <TextField
          type="text"
          name="endsWith"
          value={filters.endsWith}
          onChange={handleFilterChange}
          label="Ends With"
          size="small"
        />
        <FormControlLabel
          label="Double Letters"
          sx={{ color: "text.secondary" }}
          control={
            <Checkbox
              name="doubleLetters"
              checked={filters.doubleLetters}
              onChange={handleFilterChange}
            />
          }
        />
        <Select
          name="continent"
          value={filters.continent}
          onChange={handleFilterChange}
          size="small"
        >
          <MenuItem value="All">All Continents</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="North America">North America</MenuItem>
          <MenuItem value="South America">South America</MenuItem>
          <MenuItem value="Antarctica">Antarctica</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </Box>
    </Grid>
  );
}
