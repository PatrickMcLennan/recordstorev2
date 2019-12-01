import React, { useRef, useState, RefObject, MutableRefObject } from 'react';
import { RouteComponentProps } from 'react-router';

import { genres, IGenres } from 'Utility/dictionary';
import { compareString } from 'Utility/functions';

import {
  StyledAudienceDiv,
  StyledCheckBox,
  StyledCheckBoxBox,
  StyledCheckBoxLabel,
  StyledGenresButtons,
  StyledGenresLabel,
  StyledGenresUl,
  StyledH4,
  StyledNameLabel,
  StyledTextInput
} from './CreatePlaylist.style';

export interface ICreatePlaylistProps extends RouteComponentProps<{ userId: string }> {}

const CreatePlaylist: React.FC<ICreatePlaylistProps> = (props: ICreatePlaylistProps) => {
  // Values
  const [name, setName]: [string, any] = useState('');
  const [publicPlaylist, setPublicPlaylist]: [boolean, any] = useState(true);

  // Genre Input, Chosen Values, dropdown toggle
  const [genreInput, setGenreInput]: [string, any] = useState('');
  const [chosenGenres, setChosenGenres]: [IGenres, any] = useState(genres);
  const [showGenres, setShowGenres]: [boolean, any] = useState(false);

  // Make a Ref for every Viable Element in the UL
  const showGenresRefs: MutableRefObject<HTMLButtonElement> = Object.keys(genres).map(genre => useRef(null));

  // Errors
  const [nameError, setNameError]: [boolean, any] = useState(false);

  const handleGenreInputkeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Down' || e.key === 'ArrowDown') {
      e.preventDefault();
    }
  };

  const validatePlaylist = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.length <= 1) {
      setNameError(true);
    }
  };

  //   useEffect(() => {}, [genreInput]);

  return (
    <main>
      <h2>Create a new Playlist</h2>
      <StyledH4>Playlist Name: *</StyledH4>

      {/* Playlist Name */}
      <StyledNameLabel htmlFor="playlistName">
        <StyledTextInput
          aria-invalid={name.length === 0}
          aria-label="Enter a name for the Playlist"
          aria-required="true"
          id="playlistName"
          inputError={nameError}
          title="Playlist Name"
          type="text"
          onChange={({ target: { value } }) => setName(value)}
          value={name}
        />
      </StyledNameLabel>

      {/* Checkboxes for Public/Private */}
      <StyledAudienceDiv>
        <StyledH4>Audience: *</StyledH4>
        <StyledCheckBoxBox>
          <StyledCheckBoxLabel htmlFor="playlistPublic">
            <span>Public Playlist</span>
            <StyledCheckBox
              currentlyChecked={publicPlaylist}
              id="playlistPublic"
              onClick={() => setPublicPlaylist(true)}></StyledCheckBox>
            <span>Anybody can see or share a public Playlist and its Author.</span>
          </StyledCheckBoxLabel>
          <StyledCheckBoxLabel htmlFor="playlistPrivate">
            <span>Private Playlist</span>
            <StyledCheckBox
              currentlyChecked={!publicPlaylist}
              id="playlistPrivate"
              onClick={() => setPublicPlaylist(false)}></StyledCheckBox>
            <span>Only Invitees can see or share a Private Playlist and its Author.</span>
          </StyledCheckBoxLabel>
        </StyledCheckBoxBox>
      </StyledAudienceDiv>

      {/* Genres Dropdown */}
      <StyledH4>Genre(s): </StyledH4>
      <StyledGenresLabel htmlFor="playlistGenre">
        <span>Describe the Playlist</span>
        <input
          aria-label="Enter the Genres for your Playlist"
          aria-required="false"
          id="playlistGenre"
          title="Enter the Genres for your Playlist"
          type="text"
          onFocus={() => setShowGenres(true)}
          onKeyDown={(e: React.KeyboardEvent) => handleGenreInputkeyDown(e)}
          onBlur={() => setShowGenres(false)}
          onChange={({ target: { value } }) => setGenreInput(value)}
          value={genreInput}
        />
        {showGenres && (
          <StyledGenresUl>
            {Object.keys(genres)
              .filter((genre: keyof IGenres) => !genres[genre])
              .filter((genre: keyof IGenres) =>
                genreInput.length >= 1 ? compareString(genre).includes(compareString(genreInput)) : true
              )
              .map((genre: keyof IGenres, i: number) => (
                <li key={i}>
                  <button
                    onClick={(): IGenres => {
                      setChosenGenres({
                        ...chosenGenres,
                        [genre]: !chosenGenres[genre]
                      });
                      return setShowGenres(true);
                    }}
                    onFocus={() => setShowGenres(true)}
                    ref={showGenresRefs[i]}>
                    {genre}
                  </button>
                </li>
              ))}
          </StyledGenresUl>
        )}
      </StyledGenresLabel>

      {/* Genres buttons */}
      <StyledGenresButtons>
        {Object.keys(genres)
          .filter((genre: keyof IGenres) => genres[genre])
          .map((chosenGenre: keyof IGenres) => (
            <button
              onClick={(): IGenres =>
                setChosenGenres({
                  ...chosenGenres,
                  [chosenGenre]: !chosenGenres[chosenGenre]
                })
              }>
              {chosenGenre}
            </button>
          ))}
      </StyledGenresButtons>
    </main>
  );
};

export default CreatePlaylist;
