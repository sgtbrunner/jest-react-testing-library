import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Options from '../Options';

describe('update scoop subtotal when scoops change', () => {
  let scoopsSubTotal;
  beforeEach(() => {
    render(<Options optionType='scoops' />);
    scoopsSubTotal = screen.getByText('Scoop total: $', { exact: false });
  });

  test('make sure total starts out $0.00', async () => {
    expect(scoopsSubTotal).toHaveTextContent('0.00');
  });

  test('update vanilla scoops to 1 and check the subtotal', async () => {
    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '1');
    expect(scoopsSubTotal).toHaveTextContent('2.00');
  });

  test('update chocolate scoops to 2 and check subtotal', async () => {
    const chocolateInput = await screen.findByRole('spinbutton', {
      name: 'Chocolate',
    });
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, '2');
    expect(scoopsSubTotal).toHaveTextContent('6.00');
  });
});
