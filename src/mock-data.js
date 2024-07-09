const mockData = [
  {
    kind: "calendar#event",
    etag: "etag1",
    id: "event1",
    status: "confirmed",
    htmlLink: "https://www.google.com/calendar/event?eid=event1",
    created: "2024-07-01T10:00:00.000Z",
    updated: "2024-07-01T12:00:00.000Z",
    summary: "Meeting with Bob",
    description: "Discuss project updates.",
    location: "Office",
    start: {
      dateTime: "2024-07-05T10:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    end: {
      dateTime: "2024-07-05T11:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    attendees: [
      {
        email: "bob@example.com",
        responseStatus: "accepted",
      },
    ],
    organizer: {
      email: "organizer@example.com",
    },
  },
  {
    kind: "calendar#event",
    etag: "etag2",
    id: "event2",
    status: "confirmed",
    htmlLink: "https://www.google.com/calendar/event?eid=event2",
    created: "2024-07-02T09:00:00.000Z",
    updated: "2024-07-02T10:00:00.000Z",
    summary: "Lunch with Alice",
    description: "Lunch at the new cafe.",
    location: "Cafe",
    start: {
      dateTime: "2024-07-06T12:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    end: {
      dateTime: "2024-07-06T13:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    attendees: [
      {
        email: "alice@example.com",
        responseStatus: "tentative",
      },
    ],
    organizer: {
      email: "organizer@example.com",
    },
  },
  // Add more events as needed
];

export default mockData;
