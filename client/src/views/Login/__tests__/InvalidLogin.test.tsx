import React, { FormEvent } from 'react';
import { Router, match } from 'react-router-dom';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { createLocation, createMemoryHistory, MemoryHistory } from 'history';

import { theme } from '../../../utils/resets.style';
import Login from '../Login';

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

test('Invalid Login Attempt', () => {
  const Login = renderLogin();
  const { getByTestId } = Login;
  const [form, email, password, submit]: [HTMLFormElement, HTMLInputElement, HTMLInputElement, HTMLInputElement] = [
    getByTestId('form'),
    getByTestId('email-input'),
    getByTestId('password-input'),
    getByTestId('submit')
  ];

  // Email input gets Focus on Page Load
  expect(document.activeElement).toBe(email);

  //  Renders Blank
  expect(email.value).toBe('');
  expect(password.value).toBe('');

  // Fire Blank Submit, ensure Error styles Display
  fireEvent.click(submit);
  expect(email).toHaveStyleRule('border', '1px solid red');
  expect(password).toHaveStyleRule('border', '1px solid red');

  // Try invalid email || password, ensure proper styles remain
  fireEvent.change(email, { target: { value: 'tester@tester.com' } });
  fireEvent.change(password, { target: { value: '' } });
  fireEvent.click(submit);
  expect(email).not.toHaveStyleRule('border', '1px solid red');
  expect(password).toHaveStyleRule('border', '1px solid red');

  fireEvent.change(email, { target: { value: '' } });
  fireEvent.change(password, { target: { value: 'fmgfkglkd' } });
  fireEvent.click(submit);
  expect(email).toHaveStyleRule('border', '1px solid red');
  expect(password).not.toHaveStyleRule('border', '1px solid red');
});
