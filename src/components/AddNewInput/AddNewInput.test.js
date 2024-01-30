import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import App from '../App/App';
import AddNewInput from './AddNewInput';


// Expect input to render on init DONE
// Expect input to change when typing DONE
// Cannot submit empty form
// On submit, creates a new task


test('Expect input and form to render on init', () => {
  render(<App />);
  const input = screen.getByTestId('add-new-input')
  const form = screen.getByTestId('add-new-form')

  expect(form).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input).toHaveTextContent('Add New');
});



test('Expect input to change when text typed', () => {
  render(<App />);
  const input = screen.getByLabelText("Add New");
  expect(input).toBeInTheDocument();

  fireEvent.change(input , {target: { value: 'Walk the dog'}});

  expect(input.value).toBe('Walk the dog');
});