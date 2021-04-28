import { render, screen } from "@testing-library/react";

import Options from "../Options";

let scoopImages;
beforeEach(async () => {
  render(<Options optionType="scoops" />);
  scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
});

test("displays two(2) scoop images", () => {
  expect(scoopImages).toHaveLength(2);
});

test("displays image for each scoop option from server", () => {
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
