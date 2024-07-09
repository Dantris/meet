import React from "react";
import { act } from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("<App /> component", () => {
  let container;

  beforeEach(async () => {
    await act(async () => {
      const result = render(<App />);
      container = result.container;
    });
  });

  test("renders list of events", () => {
    expect(container.querySelector("#event-list")).toBeInTheDocument();
  });

  test("renders CitySearch", () => {
    expect(container.querySelector("#city-search")).toBeInTheDocument();
  });

  test("renders NumberOfEvents component", () => {
    expect(container.querySelector(".number-of-events")).toBeInTheDocument();
  });
});
