import { render } from "@testing-library/react";
import mockData from "../mock-data";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let EventComponent;
  const event = mockData[0];
  beforeEach(() => {
    EventComponent = render(<Event event={event} />);
  });
  test("Event title present", () => {
    expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
  });

  test("Event created time present", () => {
    expect(EventComponent.queryByText(event.created)).toBeInTheDocument();
  });

  test("Event location present", () => {
    expect(EventComponent.queryByText(event.location)).toBeInTheDocument();
  });

  test("Button show details present", () => {
    expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
  });

  test("Events details section should be hidden by default", () => {
    const details = EventComponent.container.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });

  test("When user clicks show details button, details section present", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText("Show Details");
    await user.click(button);
    const details = EventComponent.container.querySelector(".details");
    expect(details).toBeInTheDocument();
  });

  test("When user clicks hide details button, details section is hidden", async () => {
    const user = userEvent.setup();
    const showButton = EventComponent.queryByText("Show Details");
    const hideButton = EventComponent.queryByText("Hide Details");
    user.click(hideButton);
    expect(showButton).toBeInTheDocument();
    expect(hideButton).not.toBeInTheDocument();
  });
});
