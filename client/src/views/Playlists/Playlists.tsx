import React from 'react';
import { RouteComponentProps } from 'react-router';
import Playlist from 'Component/Playlist/PlayList';
export interface IPlaylistsProps extends RouteComponentProps<{ userId: string }> {}

const Playlists: React.FC<IPlaylistsProps> = (props: IPlaylistsProps) => {
  return (
    <main>
      <h2>My Playlists</h2>
      <Playlist
        userName="Patrick"
        playlistTitle="Tester"
        tracks={[{ service: 'spotify', songArtist: 'tester artist', songAlbum: 'test album', songTitle: 'tester title' }]}
      />
    </main>
  );
};

export default Playlists;
