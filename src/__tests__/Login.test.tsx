import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../components/Login';
import { createMemoryHistory } from '@remix-run/router';

test('Login form is displayed in Login page', () => {
  render(<Login />);
  const formElement = screen.getByTestId('login-form') as HTMLElement;
  expect(formElement).toBeInTheDocument();
})

test('Login form has input fields for email and password', () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(passwordInput).toHaveAttribute('type', 'password');
})

test('Login form has submit button', () => {
    render(<Login />);
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();
}) 

/*it('should redirect to dashboard page on successful login', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Login />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(emailInput, { target: { value: 'example@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    // Wait for redirection to happen
    await screen.findByTestId('dashboard-page');

    expect(history.location.pathname).toBe('/dashboard');
  });*/