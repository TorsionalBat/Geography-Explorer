import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";

// Define the keyframes for the shake animation
const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

// Define a styled Button component with dynamic styles
const AnimatedButton = styled(Button)(({ shake, color }) => ({
  ...(shake && {
    animation: `${shake} 0.5s`,
  }),
  ...(color && {
    backgroundColor: color,
    color: color,
  }),
}));

function Guess({ filteredData, handleGuess }) {
  const [guess, setGuess] = React.useState("");
  const [shakeAnimation, setShakeAnimation] = React.useState(false);
  const [buttonColor, setButtonColor] = React.useState("primary");

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleClick = () => {
    const guessLower = guess.toLowerCase();
    const isCorrect = filteredData.some(
      (country) => country.name.common.toLowerCase() === guessLower
    );

    setButtonColor(isCorrect ? "success" : "error");
    setShakeAnimation(isCorrect ? false : true);

    setTimeout(() => {
      setShakeAnimation(false);
      setButtonColor("primary");
    }, 2000);

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
      <AnimatedButton
        size="large"
        variant="outlined"
        onClick={handleClick}
        shake={shakeAnimation ? shake : null}
        color={buttonColor}
      >
        Check Guess
      </AnimatedButton>
    </Box>
  );
}

export default Guess;
