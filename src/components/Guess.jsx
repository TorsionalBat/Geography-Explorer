import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";

function Guess({ filteredData, handleGuess }) {
  const [guess, setGuess] = React.useState("");

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  //   const handleGuess = () => {
  //     const isInList = filteredData.some(
  //       (country) => country.name.common.toLowerCase() === guess.toLowerCase()
  //     );
  //     console.log(
  //       isInList ? "Guess is in the list!" : "Guess is not in the list."
  //     );
  //   };

  const handleClick = () => {
    handleGuess(guess);
    setGuess("");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding={2}
      gap={2}
      sx={{
        bgColor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5">Guess the Country</Typography>
      <TextField
        type="text"
        label="Guess"
        size="small"
        value={guess}
        onChange={handleInputChange}
      />
      <Button
        color="primary"
        size="large"
        variant="outlined"
        onClick={handleClick}
      >
        Check Guess
      </Button>
    </Box>
  );
}

export default Guess;
