import React from 'react';
import { Router, match } from 'react-router-dom';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { createMemoryHistory, MemoryHistory } from 'history';

import { theme } from 'Utility/resets.style';
import Nav from '../Nav';

const renderNav: Function = (): RenderResult => {
  const history: MemoryHistory = createMemoryHistory();
  return render(
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Nav />
      </ThemeProvider>
    </Router>
  );
};

test('Guest Nav', () => {
  const { getByTestId, queryByTestId } = renderNav();
  const [h1, header, nav]: [HTMLHeadingElement, HTMLElement, HTMLElement] = [
    getByTestId('h1'),
    getByTestId('header'),
    queryByTestId('nav')
  ];

  // H1 is always present
  expect(header).toContainElement(h1);
  // Correct H1
  expect(h1.textContent).toBe('recordStore');
  // No User, no Nav
  expect(nav).not.toBeInTheDocument();
});
