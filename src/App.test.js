// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PII heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/PII/i);
  expect(headingElement).toBeInTheDocument();
});
