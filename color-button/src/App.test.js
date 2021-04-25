import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

let colorButton;
beforeEach(() => {
    render(<App />);
    colorButton = screen.getByRole("button", { name: "Change to blue" });
});

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
