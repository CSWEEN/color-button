import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpace } from './App';

it('should have correct initial button colour', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'});

  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

it('should turn the button Midnight Blue when clicked', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  expect(colorButton.textContent).toBe('Change to Medium Violet Red');
});

it('should have the checkbox unchecked initially', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

it('should disable the button when checked', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

it('should have a grey button when disabled', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle( {backgroundColor: 'gray'} );

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

it('should have a grey button even after being clicked, when enabled turns back to MidnightBlue', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle( {backgroundColor: 'gray'} );

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
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