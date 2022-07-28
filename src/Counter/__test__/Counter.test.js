import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Counter from '../Counter';

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

afterEach(() => {
  cleanup();
});

test('header renders with correct text', () => {
  const headerElement = getByTestId('header');

  expect(headerElement.textContent).toBe('My Counter');
});

test('Counter initally start with text of 0', () => {
  const counterElement = getByTestId('counter');

  expect(counterElement.textContent).toBe('0');
});

test('Input containts initial value of 1', () => {
  const inputElement = getByTestId('input');

  expect(inputElement.value).toBe('1');
});

test('Add button renders with +', () => {
  const addElement = getByTestId('add-btn');

  expect(addElement.textContent).toBe('+');
});

test('Add button renders with -', () => {
  const minElement = getByTestId('min-btn');

  expect(minElement.textContent).toBe('-');
});

test('Change value of input works correctly', () => {
  const inputElement = getByTestId('input');

  expect(inputElement.value).toBe('1');

  fireEvent.change(inputElement, {
    target: { value: '5' },
  });

  expect(inputElement.value).toBe('5');
});

test('Click on plus btn adds 1 to counter', () => {
  const addElement = getByTestId('add-btn');
  const counterElement = getByTestId('counter');

  fireEvent.click(addElement);

  expect(counterElement.textContent).toBe('1');
});

test('Click on subtract btn adds 1 to counter', () => {
  const minElement = getByTestId('min-btn');
  const counterElement = getByTestId('counter');

  fireEvent.click(minElement);

  expect(counterElement.textContent).toBe('-1');
});

test('Changin input value then clicking on add btn works correctly', () => {
  const addElement = getByTestId('add-btn');
  const counterElement = getByTestId('counter');
  const inputElement = getByTestId('input');

  fireEvent.change(inputElement, {
    target: { value: '5' },
  });

  fireEvent.click(addElement);

  expect(counterElement.textContent).toBe('5');
});

test('Changin input value then clicking on minus btn works correctly', () => {
  const minElement = getByTestId('min-btn');
  const counterElement = getByTestId('counter');
  const inputElement = getByTestId('input');

  fireEvent.change(inputElement, {
    target: { value: '5' },
  });

  fireEvent.click(minElement);

  expect(counterElement.textContent).toBe('-5');
});

test('adding and minus works correctly', () => {
  const addElement = getByTestId('add-btn');
  const minElement = getByTestId('min-btn');
  const counterElement = getByTestId('counter');
  const inputElement = getByTestId('input');

  fireEvent.change(inputElement, {
    target: { value: '10' },
  });

  fireEvent.click(addElement);
  fireEvent.click(addElement);
  fireEvent.click(minElement);
  fireEvent.click(addElement);

  expect(counterElement.textContent).toBe('20');

  fireEvent.change(inputElement, {
    target: { value: '10' },
  });

  fireEvent.click(minElement);
  fireEvent.click(minElement);
  fireEvent.click(addElement);
  fireEvent.click(minElement);
  fireEvent.click(minElement);

  expect(counterElement.textContent).toBe('-10');
});

test('Counter contains correct className', () => {
  const counterElement = getByTestId('counter');
  const addElement = getByTestId('add-btn');
  const minElement = getByTestId('min-btn');
  const inputElement = getByTestId('input');

  expect(counterElement.className).toBe('');

  fireEvent.change(inputElement, {
    target: { value: '50' },
  });

  fireEvent.click(addElement);

  expect(counterElement.className).toBe('');

  fireEvent.click(addElement);

  expect(counterElement.className).toBe('green');

  fireEvent.click(addElement);

  expect(counterElement.className).toBe('green');

  fireEvent.click(minElement);

  expect(counterElement.className).toBe('green');

  fireEvent.click(minElement);

  expect(counterElement.className).toBe('');

  fireEvent.click(minElement);
  fireEvent.click(minElement);
  fireEvent.click(minElement);
  fireEvent.click(minElement);

  expect(counterElement.className).toBe('red');

  fireEvent.click(minElement);

  expect(counterElement.className).toBe('red');

  expect(counterElement.textContent).toBe('-200');
});
