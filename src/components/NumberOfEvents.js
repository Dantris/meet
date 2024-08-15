import React from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleNumberInput = (event) => {
    const value = event.target.value;
    if (isNaN(value) || value <= 0) {
      setErrorAlert("Please enter a valid number of events.");
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
