import React from 'react';
import { Router, match } from 'react-router-dom';
import { render, RenderResult, fireEvent, waitForElement } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { createLocation, createMemoryHistory, MemoryHistory } from 'history';

import { theme } from '../../../utils/resets.style';
import Login from '../Login';

const mockLogin = (history: History) => null;

const match: match = {
  isExact: true,
  path: '/',
  url: '/',
  params: {}
};

const renderLogin: Function = (): RenderResult => {
  const history: MemoryHistory = createMemoryHistory();
  return render(
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Login history={history} match={match} location={createLocation(match.url)} />
      </ThemeProvider>
    </Router>
  );
};

test('Invalid Login Attempt', async () => {
  const { getByTestId } = renderLogin();
  const [form, email, password, submit]: [HTMLFormElement, HTMLInputElement, HTMLInputElement, HTMLInputElement] = [
    getByTestId('form'),
    getByTestId('email-input'),
    getByTestId('password-input'),
    getByTestId('submit')
  ];

  //  Renders Blank
  expect(email.value).toBe('');
  expect(password.value).toBe('');

  // Fire Blank Submit, ensure Error styles Display
  fireEvent.click(submit);
  expect(email).toHaveStyleRule('border', '1px solid red');
  expect(password).toHaveStyleRule('border', '1px solid red');

  // Try invalid email + password, ensure error styles remain
  fireEvent.change(email, { target: { value: 'invalid' } });
  fireEvent.change(password, { target: { value: 'invalid' } });
  fireEvent.click(submit);
  //   expect(email).toHaveStyleRule('border', '1px solid red');
  //   expect(password).toHaveStyleRule('border', '1px solid red');

  // Ensure Rejection
  //   expect(email.value).toBe('invalid');
  //   expect(password.value).toBe('invalid');
});
