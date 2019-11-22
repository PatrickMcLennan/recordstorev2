import React, { useEffect, RefObject, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Nav from 'Component/Nav/Nav';
import Footer from 'Component/Footer/Footer';

import { ServerContextProvider } from 'Context/ServerContext';

import Login from 'View/Login/Login';
import Home from 'View/Home/Home';

import { GlobalStyle, theme } from 'Utility/resets.style';

const App: React.FC = () => {
  const headerRef: RefObject<null | HTMLElement> = useRef(null);
  const footerRef: RefObject<null | HTMLElement> = useRef(null);

  const [headerHeight, setHeaderHeight]: [number, any] = useState(0);
  const [footerHeight, setFooterHeight]: [number, any] = useState(0);

  useEffect(() => {
    setHeaderHeight(headerRef.current.offsetHeight);
    setFooterHeight(footerRef.current.offsetHeight);
  }, []);

  return (
    <Router>
      <GlobalStyle header={headerHeight} footer={footerHeight} window={window} />
      <ThemeProvider theme={theme}>
        <ServerContextProvider>
          <Nav ref={headerRef} />
          <Switch>
            <Route exact path="/" render={(props: RouteComponentProps) => <Login {...props} />} />
            <Route
              exact
              path="/home/:userId"
              render={(props: RouteComponentProps<{ userId: string }>) => <Home {...props} />}
            />
          </Switch>
          <Footer ref={footerRef} />
        </ServerContextProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
