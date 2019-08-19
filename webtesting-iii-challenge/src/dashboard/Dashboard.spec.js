// Test away

import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('Should match snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test('Renders display and controls', () => {
  const { getByText } = render(<Dashboard />);
  getByText(/unlocked/i);
  getByText(/close gate/i);
});