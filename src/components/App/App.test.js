import { render, screen } from '@testing-library/react';
import App from './App';

test('On start, everything is rendered and in blank state', () => {
  render(<App />);

  const heading = screen.getByText('To Do');
  const input = screen.getByTestId('add-new-input')

  expect(heading).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input).toHaveTextContent('Add New');

});

