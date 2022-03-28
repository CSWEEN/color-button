import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

it('should have correct initial button colour', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue'});

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

it('should turn the button blue when clicked', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  expect(colorButton.textContent).toBe('Change to red');
});