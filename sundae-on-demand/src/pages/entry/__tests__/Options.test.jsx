import { render, screen } from '../../../test-utils/testing-library-utils';

import Options from '../Options';

describe('scoop images', () => {
  let scoopImages;
  beforeEach(async () => {
    render(<Options optionType='scoops' />);
    scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  });

  test('displays two(2) scoop images', () => {
    expect(scoopImages).toHaveLength(2);
  });

  test('displays image for each scoop option from server', () => {
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
  });
});

describe('topping option', () => {
  let toppingImages;
  beforeEach(async () => {
    render(<Options optionType='toppings' />);
    toppingImages = await screen.findAllByRole('img', { name: /topping$/i });
  });

  test('displayes three(3) topping images', () => {
    expect(toppingImages).toHaveLength(3);
  });

  test('displays image for each scoop option from server', () => {
    const altText = toppingImages.map((element) => element.alt);
    expect(altText).toEqual([
      'Cherries topping',
      'M&Ms topping',
      'Hot fudge topping',
    ]);
  });
});
