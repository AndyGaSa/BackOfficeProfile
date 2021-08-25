import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Given an App component', () => {
  describe('When App is rendered', () => {
    test('Then should render App', () => {
      render(<App />);
      expect(screen.getByTestId('titleNavbar')).toBeInTheDocument();
    });
  });
});
