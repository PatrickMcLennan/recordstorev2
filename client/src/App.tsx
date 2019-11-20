import React from 'react';
import { BrowserRouter as Router, Route, RouteProps, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Nav from 'Component/Nav/Nav';
import Footer from 'Component/Footer/Footer';

import Login from 'View/Login/Login';

import { GlobalStyle, theme } from 'Utility/resets.style';

const App: React.FC = () => (
  <Router>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route exact path="/home/:userId" render={(props: RouteProps) => <Login {...props} />} />
      </Switch>
      <Footer />
    </ThemeProvider>
  </Router>
);

export default App;
