import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import WWBody from "./WWBody";

afterEach(cleanup);

test("text area exists (canary)", () => {
  const { getByTestId } = render(<WWBody />);
  const taElement = getByTestId("input-text-area");
  expect(taElement).toBeInTheDocument();
});

/* Could also include tests for other elements */

test("the default column count should be 30", () => {
  const { getByTestId } = render(<WWBody />);
  const colCount = getByTestId("column-count");
  expect(colCount.value).toBe("30");
});

test("the column count field is numeric only", () => {
  const { getByTestId } = render(<WWBody />);
  const colCount = getByTestId("column-count");
  fireEvent.change(colCount, { target: { value: "A" } });
  expect(colCount.value).toBe("");
  fireEvent.change(colCount, { target: { value: "5" } });
  expect(colCount.value).toBe("5");
});

test("adding text should result in an update to the view only area", () => {
  const { getByTestId } = render(<WWBody />);
  const colCount = getByTestId("column-count");
  const inputField = getByTestId("input-text-area");
  const outputField = getByTestId("output-text-area");
  fireEvent.change(inputField, { target: { value: "Some text" } });
  expect(outputField.value).toBe("Some text");
});
