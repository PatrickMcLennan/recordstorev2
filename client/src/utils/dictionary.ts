export interface ISong {
  songAlbum: string;
  songArtwork?: string;
  songTitle: string;
  songArtist: string;
  service: string;
}

export const genres: IGenres = {
  Acoustic: false,
  Blues: false,
  Country: false,
  Dance: false,
  Electronic: false,
  Focus: false,
  Folk: false,
  Funk: false,
  hipHop: false,
  Indie: false,
  Jazz: false,
  Metal: false,
  RnB: false,
  Party: false,
  Pop: false,
  Punk: false,
  Reggae: false,
  Rock: false,
  Soul: false
};
export interface IGenres {
  Acoustic: boolean;
  Blues: boolean;
  Country: boolean;
  Dance: boolean;
  Electronic: boolean;
  Focus: boolean;
  Folk: boolean;
  Funk: boolean;
  hipHop: boolean;
  Indie: boolean;
  Jazz: boolean;
  Metal: boolean;
  RnB: boolean;
  Party: boolean;
  Pop: boolean;
  Punk: boolean;
  Reggae: boolean;
  Rock: boolean;
  Soul: boolean;
}
