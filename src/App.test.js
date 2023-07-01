import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('navigates to different sections', () => {
  render(<App />);

  // Get elements by text.
  const homeLink = screen.getByText(/home/i);
  const aboutLink = screen.getByText(/about/i);

  // Click on about link.
  fireEvent.click(aboutLink);

  // Check if home link does not have 'active' class after about link has been clicked.
  expect(homeLink.className).not.toContain('active');

  // Check if about link has 'active' class after it has been clicked.
  expect(aboutLink.className).toContain('active');
});
