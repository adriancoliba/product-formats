import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";

import Formats from './Formats';

test('renders main div', async () => {
  render(<Formats />);

  const error = screen.getByText(/This is an error message that appears when there are 0 formats selected/i);
  const inputCheckbox = screen.getByTestId("input_checkbox_digital") as HTMLInputElement;

  expect(error).toBeInTheDocument();
  expect(inputCheckbox.checked).toBe(false);

  fireEvent.click(inputCheckbox);

  expect(error).not.toBeInTheDocument();
  expect(inputCheckbox.checked).toBe(true);
});
