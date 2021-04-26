import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

let checkBox;
let confirmButton;
beforeEach(() => {
  render(<SummaryForm />);
  checkBox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
});

describe("SummaryForm", () => {
  test("initial conditions", () => {
    expect(checkBox).not.toBeChecked();
  });

  test("checking box enables button", () => {
    fireEvent.click(checkBox);

    expect(checkBox).toBeChecked();
    expect(confirmButton).toBeEnabled();
  });

  test("unchecking box again disables button", () => {
    fireEvent.click(checkBox);
    fireEvent.click(checkBox);

    expect(checkBox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });
});
