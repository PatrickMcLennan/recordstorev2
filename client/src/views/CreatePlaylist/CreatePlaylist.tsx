import React from 'react';
import { RouteComponentProps } from 'react-router';

import Playlist from 'Component/Playlist/PlayList';

export interface ICreatePlaylistProps extends RouteComponentProps<{ userId: string }> {}

const CreatePlaylist: React.FC<ICreatePlaylistProps> = (props: ICreatePlaylistProps) => {
  return (
    <main>
      <Playlist
        userName="Patrick"
        playlistTitle="Tester"
        tracks={[{ service: 'spotify', songArtist: 'tester artist', songAlbum: 'test album', songTitle: 'tester title' }]}
      />
    </main>
  );
};

export default CreatePlaylist;
