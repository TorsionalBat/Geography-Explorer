import React from "react";
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Box,
  Divider,
} from "@mui/material";

export default function Results({ filteredData, guessedCountries }) {
  return (
    <Container>
      <Box marginTop={3} marginRight={5}>
        <Typography variant="h4">Results</Typography>
        <Divider />
      </Box>
      <Box marginTop={2}>
        <div
          className="scrollable-list"
          style={{ maxHeight: 410, overflowY: "auto" }}
        >
          <Box marginRight={4}>
            <List>
              {filteredData.map((country, index) => (
                <React.Fragment key={`${country.name}--${index}`}>
                  <ListItem>
                    <ListItemAvatar src={country.flags.svg} />
                  </ListItem>
                  <ListItemText
                    primary={
                      <Box
                        position="relative"
                        width="100%"
                        display="flex"
                        alignItems="center"
                      >
                        <div>{country.name.common}</div>
                      </Box>
                    }
                  />
                  <Divider />
                </React.Fragment>
              ))}
            </List>
            {/* <ul>
            {filteredData.map((country) =>
              guessedCountries.includes(country.name.common.toLowerCase()) ? (
                <li key={country.cca3} style={{ color: "green" }}>
                  {country.name.common}
                </li>
              ) : (
                <li key={country.cca3}>{country.name.common}</li>
              )
            )}
          </ul> */}
          </Box>
        </div>
      </Box>
    </Container>
  );
}
