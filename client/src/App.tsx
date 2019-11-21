import React from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Nav from 'Component/Nav/Nav';
import Footer from 'Component/Footer/Footer';

import { ServerContextProvider } from 'Context/ServerContext';

import Login from 'View/Login/Login';
import Home from 'View/Home/Home';

import { GlobalStyle, theme } from 'Utility/resets.style';

const App: React.FC = () => (
  <Router>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <ServerContextProvider>
        <Nav />
        <Switch>
          <Route exact path="/" render={(props: RouteComponentProps) => <Login {...props} />} />
          <Route
            exact
            path="/home/:userId"
            render={(props: RouteComponentProps<{ userId: string }>) => <Home {...props} />}
          />
        </Switch>
        <Footer />
      </ServerContextProvider>
    </ThemeProvider>
  </Router>
);

export default App;
