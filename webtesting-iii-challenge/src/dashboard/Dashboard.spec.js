// Test away

import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test('Renders display and controls', () => {
  const { getByText } = render(<Dashboard />);
  getByText(/unlocked/i);
  getByText(/close gate/i);
});