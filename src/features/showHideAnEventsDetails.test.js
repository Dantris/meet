import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, screen } from "@testing-library/react";
import App from "../App";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("When the details of an event are hidden by default.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the main page is open", () => {
      AppComponent = render(<App />);
    });

    when("the app displays a list of event", async () => {
      await waitFor(() => {
        expect(screen.queryAllByRole("listitem").length).toBeGreaterThanOrEqual(
          1
        ); // Ensure there's at least one item
      });
    });

    then("the event details are hidden by default", () => {
      expect(screen.queryByTestId("event-details")).not.toBeInTheDocument();
    });
  });

  test("User clicks to show event details.", ({ given, when, then }) => {
    let EventComponent;
    given("there is an event with hidden details", async () => {
      const events = await getEvents(); // Assume getEvents is mocked
      EventComponent = render(<Event event={events[0]} />);
      expect(screen.queryByTestId("event-details")).not.toBeInTheDocument();
    });

    when("the user clicks on the event to show details", async () => {
      userEvent.click(screen.getByTestId("details-button"));
      await waitFor(() => {
        expect(screen.getByTestId("event-details")).toBeInTheDocument();
      });
    });

    then("the app should display the details of the event", () => {
      expect(screen.getByTestId("event-details")).toBeInTheDocument();
    });
  });

  test("User clicks to hide event details.", ({ given, when, then }) => {
    let EventComponent;
    given("there is an event with displayed details", async () => {
      const events = await getEvents(); // Assume getEvents is mocked
      EventComponent = render(<Event event={events[0]} />);
      userEvent.click(screen.getByTestId("details-button")); // Show details first
      await waitFor(() => {
        expect(screen.getByTestId("event-details")).toBeInTheDocument();
      });
    });

    when("the user clicks on the event to hide details again", async () => {
      userEvent.click(screen.getByTestId("details-button")); // Now hide details
      await waitFor(() => {
        expect(screen.queryByTestId("event-details")).not.toBeInTheDocument();
      });
    });

    then("the app should hide the details of the event", () => {
      expect(screen.queryByTestId("event-details")).not.toBeInTheDocument();
    });
  });
});
