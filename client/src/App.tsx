import React, { useEffect, RefObject, useRef, useState, useCallback, MutableRefObject } from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Nav from 'Component/Nav/Nav';
import Footer from 'Component/Footer/Footer';

import { ServerContextProvider } from 'Context/ServerContext';
import { UserContextProvider } from 'Context/UserContext';

import Login from 'View/Login/Login';
import Home from 'View/Home/Home';

import { GlobalStyle, theme } from 'Utility/resets.style';

const App: React.FC = () => {
  const headerRef: RefObject<null | HTMLElement> = useRef(null);
  const footerRef: RefObject<null | HTMLElement> = useRef(null);
  const firstMount: MutableRefObject<boolean> = useRef(true);

  const [mainHeight, setMainHeight]: [number, any] = useState(0);

  const resizer = useCallback(() => {
    setMainHeight(window.innerHeight - headerRef.current.offsetHeight - footerRef.current.offsetHeight);
  }, [firstMount.current]);

  useEffect(() => {
    setMainHeight(window.innerHeight - headerRef.current.offsetHeight - footerRef.current.offsetHeight);
    window.addEventListener('resize', resizer);

    return () => {
      if (firstMount.current) {
        firstMount.current = false;
      }
      window.removeEventListener('resize', resizer);
    };
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme(mainHeight)}>
        <ServerContextProvider>
          <UserContextProvider>
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
          </UserContextProvider>
        </ServerContextProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
