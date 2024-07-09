import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  test("renders number input element", () => {
    render(<NumberOfEvents numberOfEvents={32} setNumberOfEvents={() => {}} />);
    const inputElement = screen.getByRole("spinbutton");
    expect(inputElement).toBeInTheDocument();
  });

  test("default value of number input is 32", () => {
    render(<NumberOfEvents numberOfEvents={32} setNumberOfEvents={() => {}} />);
    const inputElement = screen.getByRole("spinbutton");
    expect(inputElement.value).toBe("32");
  });

  test("changes value when user types in the input", async () => {
    const setNumberOfEvents = jest.fn();
    render(
      <NumberOfEvents
        numberOfEvents={32}
        setNumberOfEvents={setNumberOfEvents}
      />
    );
    const inputElement = screen.getByRole("spinbutton");
    fireEvent.change(inputElement, { target: { value: "10" } });
    expect(setNumberOfEvents).toHaveBeenCalledWith("10");
  });
});
