import { fireEvent, render, screen } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

let colorButton;
let checkBox;
beforeEach(() => {
  render(<App />);
  colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });
  checkBox = screen.getByRole("checkbox", { name: "Disable input" });
});

describe("functional tests", () => {
  test("initial conditions", () => {
    expect(colorButton).toBeEnabled();
    expect(checkBox).not.toBeChecked();
  });

  describe("button events", () => {
    test("button has correct initial color", () => {
      expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
    });

    test("button turns blue when clicked once", () => {
      fireEvent.click(colorButton);

      expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
    });

    test("button has correct color when clicked once", () => {
      fireEvent.click(colorButton);

      expect(colorButton.textContent).toBe("Change to Medium Violet Red");
    });
  });

  describe("checkbox events", () => {
    test("disable button on checkbox click", () => {
      fireEvent.click(checkBox);

      expect(checkBox).toBeChecked();
      expect(colorButton).toBeDisabled();
      expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
    });

    test("re-enable button on second checkbox click", () => {
      fireEvent.click(checkBox);
      fireEvent.click(checkBox);

      expect(checkBox).not.toBeChecked();
      expect(colorButton).toBeEnabled();
      expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
    });

    test("disable button after button click", () => {
      fireEvent.click(colorButton);
      fireEvent.click(checkBox);

      expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
    });
  });
});

describe("unit tests", () => {
  describe("spaces before camel-case capital letter", () => {
    test("Works for no inner capital letter", () => {
      expect(replaceCamelWithSpaces("Red")).toBe("Red");
    });

    test("Works for one inner capital letter", () => {
      expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
    });

    test("Works for multiple inner capital letter", () => {
      expect(replaceCamelWithSpaces("MediumVioletRed")).toBe(
        "Medium Violet Red"
      );
    });
  });
});
