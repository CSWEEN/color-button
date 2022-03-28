import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpace } from './App';

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

it('should have the checkbox unchecked initially', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

it('should disable the button when checked', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

it('should have a grey button when disabled', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle( {backgroundColor: 'gray'} );

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

it('should have a grey button even after being clicked, when enabled turns back to blue', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle( {backgroundColor: 'gray'} );

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});

describe('spaces before camel-case capital letters', () => {

  it('should work for no inner capital letters', () => {
    expect(replaceCamelWithSpace('Red')).toBe('Red');
  });
  
  it('should work for one inner capital letter', () => {
    expect(replaceCamelWithSpace('MidnightBlue')).toBe('Midnight Blue');
  });

  it('should work for multiple inner capital letters', () => {
    expect(replaceCamelWithSpace('MediumVioletRed')).toBe('Medium Violet Red');
  })
});