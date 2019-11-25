import React, { useEffect, RefObject, useRef, useState, useCallback, MutableRefObject } from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Nav from 'Component/Nav/Nav';
import Footer from 'Component/Footer/Footer';

import { ServerContextProvider } from 'Context/ServerContext';
import { UserContextProvider } from 'Context/UserContext';

import Account, { IAccountProps } from 'View/Account/Account';
import Home, { IHomeProps } from 'View/Home/Home';
import Login, { ILoginProps } from 'View/Login/Login';
import News, { INewsProps } from 'View/News/News';
import User, { IUserProps } from 'View/User/User';

import { GlobalStyle, theme } from 'Utility/resets.style';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme()}>
        <ServerContextProvider>
          <UserContextProvider>
            <Nav />
            <Switch>
              <Route exact path="/" render={(props: ILoginProps) => <Login {...props} />} />
              <Route exact path="/home/:userId" render={(props: IHomeProps) => <Home {...props} />} />
              <Route exact path="/account/:userId" render={(props: IAccountProps) => <Account {...props} />} />
              <Route exact path="/user/:userId/:searchedUserId" render={(props: IUserProps) => <User {...props} />} />
              <Route exact path="/news/:userId/:searchedUserId" render={(props: INewsProps) => <News {...props} />} />
            </Switch>
            <Footer />
          </UserContextProvider>
        </ServerContextProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
