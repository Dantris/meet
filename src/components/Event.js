import React, { useState, useCallback } from "react";

const formatDate = (dateString) => {
  try {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleString(undefined, options);
  } catch (error) {
    console.error("Failed to format date:", error);
    return "Invalid date";
  }
};

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = useCallback(() => {
    setShowDetails((prev) => !prev);
  }, []);

  return (
    <div className="event">
      <h1>{event.summary || "No Title"}</h1>
      <p>{event.location || "Location not specified"}</p>
      <p>
        {event.start?.dateTime
          ? formatDate(event.start.dateTime)
          : "Date not set"}
      </p>
      {showDetails && (
        <div className="event-details">
          <p>{event.description}</p>
          {event.attendees && (
            <ul>
              {event.attendees.map((attendee, index) => (
                <li key={index}>{attendee.email}</li>
              ))}
            </ul>
          )}
          <button onClick={toggleDetails}>Hide Details</button>
        </div>
      )}
      {!showDetails && <button onClick={toggleDetails}>Show Details</button>}
    </div>
  );
};

export default Event;
