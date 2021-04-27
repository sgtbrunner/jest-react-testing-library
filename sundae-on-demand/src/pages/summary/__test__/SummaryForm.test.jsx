import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

const confirmOrderString = /confirm order/i;
const termsAndConditionsString = /terms and conditions/i;
const noIceCreamWillBeDeliveredString = /no ice cream will actually be delivered/i;

describe("SummaryForm", () => {
  beforeEach(() => {
    render(<SummaryForm />);
  });

  describe("checkbox", () => {
    let checkBox;
    let confirmButton;

    beforeEach(() => {
      checkBox = screen.getByRole("checkbox", {
        name: termsAndConditionsString,
      });
      confirmButton = screen.getByRole("button", {
        name: confirmOrderString,
      });
    });

    test("initial conditions", () => {
      expect(checkBox).not.toBeChecked();
    });

    test("checking box enables button", () => {
      userEvent.click(checkBox);
      expect(checkBox).toBeChecked();

      expect(confirmButton).toBeEnabled();
    });

    test("unchecking box again disables button", () => {
      userEvent.click(checkBox);
      userEvent.click(checkBox);
      expect(checkBox).not.toBeChecked();
      expect(confirmButton).toBeDisabled();
    });
  });

  describe("popover responds to hover", () => {
    test("popover starts out hidden", () => {
      const popover = screen.queryByText(noIceCreamWillBeDeliveredString);

      expect(popover).not.toBeInTheDocument();
    });

    test("popover appears upon mouseover of checkbox label", async () => {
      const termsAndConditions = screen.getByText(termsAndConditionsString);
      userEvent.hover(termsAndConditions);
      const popover = await screen.findByText(noIceCreamWillBeDeliveredString);

      expect(popover).toBeInTheDocument();
    });

    test("popover disappears when we mouse out", async () => {
      const termsAndConditions = screen.getByText(termsAndConditionsString);
      userEvent.hover(termsAndConditions);
      userEvent.unhover(termsAndConditions);

      await waitForElementToBeRemoved(() =>
        screen.getByText(noIceCreamWillBeDeliveredString)
      );
    });
  });
});
