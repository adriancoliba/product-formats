import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main div', () => {
  render(<App />);
  expect(screen.getByText(/Sidebar/i)).toBeInTheDocument();
});
