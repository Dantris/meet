import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="event">
      <h3>{event.summary}</h3>
      <p>{event.created}</p>
      <p>{event.location}</p>
      <button
        className="details-btn"
        onClick={() => setShowDetails(!showDetails)}
        data-testid="details-button"
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div className="details" data-testid="event-details">
          <h4>Event Details</h4>
          <p>Description: {event.description}</p>
          <p>Event status: {event.status}</p>
        </div>
      )}
    </li>
  );
};

export default Event;
