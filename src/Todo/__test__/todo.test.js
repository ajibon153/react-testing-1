import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todo from '../todo';

test('Check is component rendered ? ', () => {
  render(<Todo />);

  // const todoElement = screen.getByTestId('todo-1');

  // expect(todoElement).toBeInTheDocument();
  // expect(todoElement).toHaveTextContent('Hello World!');
});
