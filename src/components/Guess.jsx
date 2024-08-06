import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import stringSimilarity from "string-similarity";

// Define the keyframes for the shake animation
const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

/* 
    Custom styled button component that takes a Boolean that represents whether or not to 'shake' the button
    as well as a colour. If the guess is correct the color is 'Success' and 'Error' for incorrect. 
    Color will always be 'True' hence the color will always change, however, shake is not always true
    Animated button is called within a setTimeout() hence the color will only presist for a short time.
*/
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
  const [guess, setGuess] = React.useState(""); // Controlled component to handle users guess
  const [shakeAnimation, setShakeAnimation] = React.useState(false); // Button will 'shake' on incorrect guess
  const [buttonColor, setButtonColor] = React.useState("primary"); // Control color of the 'Guess' button - default to primary

  // Handle changes on the input field, set state upon change
  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  /* 
    Handle the 'submission' of a guess.
        - Convert the guess to lowercase for comparison
        - Normalize the string (i.e. remove non alphabetical characters)
        - Use 'string similarity' library to allow for more intelligent guess comparison (handle difficult to spell countries)
        - Update the reaction of the 'Guess' button in-line with users guess
        - Call handleguess() which will update the guessedCountries and reveal correctly guessed countries
  */
  const handleClick = () => {
    const guessLower = guess.toLowerCase();
    const normalizedGuess = normalizeString(guessLower);

    // Returns an object with ratings property and best match property/bestMatchIndex
    const bestMatch = stringSimilarity.findBestMatch(
      normalizedGuess,
      filteredData.map((country) =>
        normalizeString(country.name.common.toLowerCase())
      )
    );

    const isCorrect = bestMatch.bestMatch.rating > 0.8; // True if the rating of the best match is greater than 80%
    const closestCountry = filteredData[bestMatch.bestMatchIndex]; // The closest country to the users guess stored at this index

    setButtonColor(isCorrect ? "success" : "error"); // Update button color based on whether the guess was correct or not
    setShakeAnimation(isCorrect ? false : true);

    // After two seconds return button back to normal state { static and primary color }
    setTimeout(() => {
      setShakeAnimation(false);
      setButtonColor("primary");
    }, 2000);

    handleGuess(isCorrect ? closestCountry.name.common : guess); // Handle the guess - if correct use the country name, otherwise use the guess.
    setGuess(""); // Return input field value to empty string
  };

  // Helper function to normalize country names - some countries contain symbols, or non-alphabetical characters
  const normalizeString = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[-\s]/g, "");
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
