import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Event from "../components/Event";
import mockData from "../mock-data";

describe("<Event /> component", () => {
  const event = mockData[0];

  test("renders event title correctly", () => {
    render(<Event event={event} />);
    expect(screen.queryByText(event.summary)).toBeInTheDocument();
  });

  test("renders event start time correctly", () => {
    render(<Event event={event} />);
    const formattedDate = new Date(event.start.dateTime).toLocaleDateString(
      undefined,
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
    );
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });

  test("renders event location correctly", () => {
    render(<Event event={event} />);
    expect(screen.queryByText(event.location)).toBeInTheDocument();
  });

  test("renders show details button", () => {
    render(<Event event={event} />);
    expect(screen.queryByText("Show Details")).toBeInTheDocument();
  });

  test("renders collapsed event details by default", () => {
    render(<Event event={event} />);
    expect(screen.queryByText(event.description)).not.toBeInTheDocument();
  });

  test("expands event details when show details button is clicked", () => {
    render(<Event event={event} />);
    const showDetailsButton = screen.getByText("Show Details");
    fireEvent.click(showDetailsButton);
    expect(screen.getByText(event.description)).toBeInTheDocument();
    expect(screen.getByText("Hide Details")).toBeInTheDocument();
  });

  test("collapses event details when hide details button is clicked", () => {
    render(<Event event={event} />);
    const showDetailsButton = screen.getByText("Show Details");
    fireEvent.click(showDetailsButton);
    const hideDetailsButton = screen.getByText("Hide Details");
    fireEvent.click(hideDetailsButton);
    expect(screen.queryByText(event.description)).not.toBeInTheDocument();
    expect(screen.getByText("Show Details")).toBeInTheDocument();
  });
});
