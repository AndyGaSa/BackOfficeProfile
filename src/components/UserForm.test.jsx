import React from 'react';
import { screen, render, fireEvent } from '../utils/test.utils';
import UserForm from './UserForm';

describe('Given a UserForm component', () => {
  describe('When UserForm is rendered', () => {
    beforeEach(() => {
      render(<UserForm />);
    });
    test('Then should render a form w data-testid userForm', () => {
      expect(screen.getByTestId('userForm')).toBeInTheDocument();
    });
    describe('And the Save button is clicked when the email input is empty', () => {
      test('Then should render a text empty email error', () => {
        const saveButton = screen.getByTestId('saveButton');
        fireEvent.click(saveButton);
        expect(screen.getByText('Username can\'t be empty')).toBeInTheDocument();
      });
    });
  });
});
