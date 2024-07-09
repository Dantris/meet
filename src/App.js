import React, { useState, useEffect } from "react";
import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
import NumberOfEvents from "./components/NumberOfEvents";
import { getEvents } from "./api";

const App = () => {
  const [events, setEvents] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  useEffect(() => {
    const fetchData = async () => {
      const allEvents = await getEvents();
      setEvents(allEvents);
    };
    fetchData();
  }, []);

  return (
    <div>
      <CitySearch />
      <NumberOfEvents
        numberOfEvents={numberOfEvents}
        setNumberOfEvents={setNumberOfEvents}
      />
      <EventList events={events.slice(0, numberOfEvents)} />
    </div>
  );
};

export default App;
