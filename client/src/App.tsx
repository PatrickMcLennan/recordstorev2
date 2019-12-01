import React from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Nav from 'Component/Nav/Nav';
import Footer from 'Component/Footer/Footer';

import { ServerContextProvider } from 'Context/ServerContext';
import { UserContextProvider } from 'Context/UserContext';

import AboutRecordStore, { IAboutRecordStoreProps } from 'View/AboutRecordStore/AboutRecordStore';
import CreatePlaylist, { ICreatePlaylistProps } from 'View/CreatePlaylist/CreatePlaylist';
import EditAccount, { IEditAccountProps } from 'View/EditAccount/EditAccount';
import Home, { IHomeProps } from 'View/Home/Home';
import Login, { ILoginProps } from 'View/Login/Login';
import MyAccount, { IMyAccountProps } from 'View/MyAccount/MyAccount';
import Music, { IMusicProps } from 'View/Music/Music';
import News, { INewsProps } from 'View/News/News';
import Notifications, { INotificationsProps } from 'View/Notifications/Notifications';
import Playlists, { IPlaylistsProps } from 'View/Playlists/Playlists';
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
              <Route exact path="/aboutRecordStore" render={(): IAboutRecordStoreProps => <AboutRecordStore />} />
              <Route
                exact
                path="/createPlaylist/:userId"
                render={(props: ICreatePlaylistProps) => <CreatePlaylist {...props} />}
              />
              <Route exact path="/editAccount/:userId" render={(props: IEditAccountProps) => <EditAccount {...props} />} />
              <Route exact path="/home/:userId" render={(props: IHomeProps) => <Home {...props} />} />
              <Route exact path="/" render={(props: ILoginProps) => <Login {...props} />} />
              <Route exact path="/music/:userId/" render={(props: IMusicProps) => <Music {...props} />} />
              <Route exact path="/myAccount/:userId/" render={(props: IMyAccountProps) => <MyAccount {...props} />} />
              <Route exact path="/news/:userId/" render={(props: INewsProps) => <News {...props} />} />
              <Route
                exact
                path="/notifications/:userId/"
                render={(props: INotificationsProps) => <Notifications {...props} />}
              />
              <Route exact path="/playlists/:userId" render={(props: IPlaylistsProps) => <Playlists {...props} />} />
              <Route exact path="/user/:userId/:searchedUserId" render={(props: IUserProps) => <User {...props} />} />
            </Switch>
            <Footer />
          </UserContextProvider>
        </ServerContextProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
