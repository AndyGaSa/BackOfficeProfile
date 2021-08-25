import React from 'react';
import { screen, render } from '../utils/test.utils';
import Header from './Header';

describe('Given a header component', () => {
  describe('When Header is rendered', () => {
    test('Then should render an element w data-testid titleNavbar', () => {
      render(<Header />);
      expect(screen.getByTestId('titleNavbar')).toBeInTheDocument();
    });
  });
});
