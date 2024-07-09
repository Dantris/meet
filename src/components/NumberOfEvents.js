import React from "react";

const NumberOfEvents = ({ numberOfEvents, setNumberOfEvents }) => {
  const handleInputChanged = (event) => {
    setNumberOfEvents(event.target.value);
  };

  return (
    <div className="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events:</label>
      <input
        type="number"
        id="number-of-events-input"
        className="number-of-events-input"
        value={numberOfEvents}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
