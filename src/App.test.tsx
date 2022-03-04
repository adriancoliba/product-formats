import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main div', () => {
  render(<App />);
  expect(screen.getByText(/Sidebar/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Formats/i)[0]).toBeInTheDocument();
  expect(screen.getByText(/This is an error message that appears when there are 0 formats selected/i)).toBeInTheDocument();
});
