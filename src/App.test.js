import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Great UI text", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/A beautiful/i);
  expect(linkElement).toBeInTheDocument();
});
