import React from "react";
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";

export default function Results({ filteredData, guessedCountries }) {
  return (
    <Container>
      <Box marginTop={2}>
        <Typography variant="h4">Results</Typography>
      </Box>
      <Divider />
      <Box marginTop={2}>
        <div
          className="scrollable-list"
          style={{ maxHeight: 410, overflowY: "auto" }}
        >
          <List>
            {filteredData.map((country, index) => (
              <React.Fragment key={`${country.name}--${index}`}>
                <ListItem>
                  {/* <ListItemAvatar>
                            
                        </ListItemAvatar> */}
                </ListItem>
                <ListItemText
                  primary={
                    <Box
                      position="relative"
                      width="100%"
                      display="flex"
                      alignItems="center"
                    >
                      <div>Generic Text</div>
                    </Box>
                  }
                />
                <Divider />
              </React.Fragment>
            ))}
          </List>
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
      </Box>
    </Container>
  );
}
