import React from "react";
import { render, screen } from "@testing-library/react";
import EventList from "../components/EventList";

describe("<EventList /> component", () => {
  test("renders correct number of events", async () => {
    // Example event data
    const mockEvents = [
      {
        id: "1",
        summary: "Event 1",
        start: { dateTime: "2024-07-05T10:00:00-07:00" },
      },
      {
        id: "2",
        summary: "Event 2",
        start: { dateTime: "2024-07-06T12:00:00-07:00" },
      },
    ];

    // Render the EventList with mock data
    render(<EventList events={mockEvents} />);

    // Debug: Output the entire container HTML
    console.log(screen.debug());

    // Check for correct number of events rendered
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(mockEvents.length);

    // Verify that the content matches expected data
    mockEvents.forEach((event) => {
      const regex = new RegExp(event.summary, "i"); // Case-insensitive match
      expect(screen.getByText(regex)).toBeInTheDocument();
    });
  });
});
