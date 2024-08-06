import React, { useEffect } from "react";
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Box,
  Divider,
  Avatar,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";

const StyledAvatar = styled(Avatar)(({ visible }) => ({
  filter: visible ? "none" : "blur(4px)",
  transition: "filter 0.7s ease-in-out",
}));

const HiddenContent = styled("div")(({ theme }) => ({
  filter: "blur(5px)",
  transition: "filter 0.7s ease-in-out, color 0.7s ease-in-out",
  color: theme.palette.text.disabled,
}));

const StyledText = styled("span")(({ visible }) => ({
  transition: "opacity 0.7s ease-in-out",
  opacity: visible ? 1 : 0,
  position: "absolute",
  width: "100%",
  textAlign: "left",
}));

export default function Results({ filteredData, guessedCountries }) {
  const [visibleItems, setVisibleItems] = React.useState({});

  useEffect(() => {
    const newVisibleItems = {};
    guessedCountries.forEach((guessedCountry) => {
      filteredData.forEach((country, index) => {
        if (
          normalizeString(country.name.common.toLowerCase()) ===
          normalizeString(guessedCountry.toLowerCase())
        ) {
          newVisibleItems[index] = true;
        }
      });
    });
    setVisibleItems(newVisibleItems);
  }, [guessedCountries, filteredData]);

  const normalizeString = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[-\s]/g, "");
  };

  const handleToggle = (index) => {
    setVisibleItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <Container>
      <Box marginTop={3} marginRight={5}>
        <Typography variant="h4">Results</Typography>
        <Divider />
      </Box>
      <Box marginTop={2} paddingBottom={2}>
        <div
          className="scrollable-list"
          style={{ maxHeight: 410, overflowY: "auto" }}
        >
          <Box marginRight={4}>
            <List>
              {filteredData.map((country, index) => (
                <React.Fragment key={`${country.name.common}--${index}`}>
                  <ListItem>
                    <ListItemAvatar>
                      <StyledAvatar
                        src={visibleItems[index] ? country.flags.svg : "?"}
                        visible={visibleItems[index]}
                      ></StyledAvatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box
                          position="relative"
                          width="100%"
                          display="flex"
                          alignItems="center"
                        >
                          <StyledText visible={!visibleItems[index]}>
                            <HiddenContent>Generic Length Text</HiddenContent>
                          </StyledText>
                          <StyledText visible={visibleItems[index]}>
                            {country.name.common}
                          </StyledText>
                        </Box>
                      }
                    />
                    <IconButton onClick={() => handleToggle(index)}>
                      {visibleItems[index] ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Box>
        </div>
      </Box>
    </Container>
  );
}
