import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Playlist from 'Component/Playlist/PlayList';

import { UserContext } from 'Context/UserContext';

import usePageMount from 'Hook/usePageMount';

export interface IHomeProps extends RouteComponentProps<{ userId: string }> {}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  const { userId } = useContext(UserContext);

  usePageMount('Home');

  return (
    <main>
      <Playlist
        userName="Patrick"
        playlistTitle="Tester"
        tracks={[{ songTitle: 'tester title', songArtist: 'tester artist', service: 'spotify' }]}
      />
    </main>
  );
};

export default Home;
