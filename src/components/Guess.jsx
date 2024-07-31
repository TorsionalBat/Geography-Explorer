import React from "react";

export default function Guess({ filteredData, handleGuess }) {
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
    <div>
      <h3>Guess the Country</h3>
      <input
        type="text"
        value={guess}
        onChange={handleInputChange}
        placeholder="Enter your guess"
      />
      <button onClick={handleClick}>Check Guess</button>
    </div>
  );
}
