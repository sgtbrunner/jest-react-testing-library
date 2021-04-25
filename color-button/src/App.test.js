import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

let colorButton;
let checkBox;
beforeEach(() => {
  render(<App />);
  colorButton = screen.getByRole("button", { name: "Change to blue" });
  checkBox = screen.getByRole("checkbox");
});

test("initial conditions", () => {
  expect(colorButton).toBeEnabled();
  expect(checkBox).not.toBeChecked();

test("button has correct initial color", () => {
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked once", () => {
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});

test("button has correct color when clicked once", () => {
  fireEvent.click(colorButton);

  expect(colorButton.textContent).toBe("Change to red");
});

test("disable button on checkbox click", () => {
  fireEvent.click(checkBox);

  expect(checkBox).toBeChecked();
  expect(colorButton).toBeDisabled();
});

test("re-enable button on second checkbox click", () => {
  fireEvent.click(checkBox);
  fireEvent.click(checkBox);

  expect(checkBox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});
