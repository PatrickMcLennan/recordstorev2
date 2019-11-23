import React, { FormEvent } from 'react';
import { Router, match } from 'react-router-dom';
import { render, RenderResult, fireEvent, waitForElement } from '@testing-library/react';
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

test('Valid Login', () => {
  const { queryByTestId } = renderLogin();
  const [form, email, password, submit]: [HTMLFormElement, HTMLInputElement, HTMLInputElement, HTMLInputElement] = [
    queryByTestId('form'),
    queryByTestId('email-input'),
    queryByTestId('password-input'),
    queryByTestId('submit')
  ];

  fireEvent.change(email, { target: { value: 'tester@tester.com' } });
  fireEvent.change(password, { target: { value: 'tester1234' } });
  //   fireEvent.click(submit);
  //   expect(form).not.toBeDefined();
  //   expect(email).not.toHaveStyleRule('border', '1px solid red');
  //   expect(password).toHaveStyleRule('border', '1px solid red');
});
