import React from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const MAX_EVENTS = 32; // Define the maximum number of events allowed

  const handleNumberInput = (event) => {
    const value = parseInt(event.target.value, 10);

    if (isNaN(value) || value <= 0) {
      setErrorAlert("Please enter a valid number of events.");
    } else if (value > MAX_EVENTS) {
      setErrorAlert(
        `The maximum number of events you can display is ${MAX_EVENTS}.`
      );
      setCurrentNOE(MAX_EVENTS); // Optionally set to MAX_EVENTS instead of user input
    } else {
      setErrorAlert(""); // Clear error message when input is valid
      setCurrentNOE(value);
    }
  };

  return (
    <div id="number-of-events">
      <input
        data-testid="numberOfEventsInput"
        type="text"
        className="textboxNumber"
        defaultValue="32"
        onChange={handleNumberInput}
      />
    </div>
  );
};

export default NumberOfEvents;
