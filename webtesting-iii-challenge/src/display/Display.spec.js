// Test away!

import React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

test('Unlocked and Open have correct classes', () => {
  const { getByText } = render(<Display closed={false} locked={false} />);
  const openDisplay = getByText(/open/i);
  const lockedDisplay = getByText(/unlocked/i);
  expect(openDisplay.classList.contains('green-led')).toBe(true);
  expect(lockedDisplay.classList.contains('green-led')).toBe(true);
});

test('Unlocked and Closed have correct classes', () => {
  const { getByText } = render(<Display closed={true} locked={false} />);
  const openDisplay = getByText(/closed/i);
  const lockedDisplay = getByText(/unlocked/i);
  expect(openDisplay.classList.contains('red-led')).toBe(true);
  expect(lockedDisplay.classList.contains('green-led')).toBe(true);
});

test('Locked and Closed have correct classes', () => {
  const { getByText } = render(<Display closed={true} locked={true} />);
  const openDisplay = getByText(/closed/i);
  const lockedDisplay = getByText(/locked/i);
  expect(openDisplay.classList.contains('red-led')).toBe(true);
  expect(lockedDisplay.classList.contains('red-led')).toBe(true);
});