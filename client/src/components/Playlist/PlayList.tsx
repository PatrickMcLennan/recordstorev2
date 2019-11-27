import React, { useContext, useState } from 'react';

import SpotifySVG from 'Component/svgs/SpotifySVG/SpotifySVG';
import HeartSVG from 'Component/svgs/HeartSVG/HeartSVG';
import PlaySVG from 'Component/svgs/PlaySVG/PlaySVG';

import { ISong } from 'Utility/dictionary';

import {
  StyledButton,
  StyledCollage,
  StyledFigure,
  StyledH6,
  StyledImg,
  StyledLi,
  StyledSpan,
  StyledSVGBox
} from './Playlist.style';
import Borders from 'Component/Borders/Borders';

interface IProps {
  playlistTitle: string;
  tracks: ISong[];
  userName: string;
}

// Generate Service Information/Links for the specific song
const serviceInformation: Function = (service: string, songTitle?: string): { href: string; svg: any } => {
  switch (service) {
    case 'spotify':
      return {
        svg: <SpotifySVG aria-label={`Open ${songTitle} in Spotify`} />,
        href: 'www.spotify.com'
      };
  }
};

const Playlist: React.FC<IProps> = ({ playlistTitle, tracks, userName }: IProps) => {
  // Show max 15 tracks , expand for more
  const [expanded, setExpanded]: [boolean, any] = useState(false);
  return (
    <StyledFigure>
      <Borders />
      <StyledSpan>Made by {userName}</StyledSpan>
      <StyledCollage
        artwork={tracks
          .map(({ songArtwork }) => songArtwork)
          .filter((artwork, i, artworkArray) => artworkArray.indexOf(artwork) === i)}
      />
      <StyledH6>{playlistTitle}</StyledH6>
      <ul>
        {tracks.map(
          ({ songAlbum, songArtwork, songTitle, songArtist, service }, i) =>
            !expanded &&
            i <= 15 && (
              // Less than 15, loop over all
              <StyledLi key={i}>
                <StyledButton>
                  <PlaySVG />
                  <StyledImg
                    src={songArtwork ? songArtwork : 'https://50px.co/wp-content/uploads/2018/10/50px.gif'}
                    alt={`The album cover for ${songAlbum}`}
                    title={`${songAlbum}`}
                  />
                  <span>{songTitle}</span>
                  <span>{songArtist}</span>
                </StyledButton>

                <StyledSVGBox>
                  <a
                    aria-label={`Open ${songTitle} on ${service} in a new tab`}
                    href={serviceInformation(service, songTitle).href}
                    target="_blank">
                    {serviceInformation(service, songTitle).svg}
                  </a>
                  <HeartSVG userLiked={false} />
                </StyledSVGBox>
              </StyledLi>
            )
        )}
      </ul>
      {tracks.length >= 16 && <button onClick={() => setExpanded(!expanded)}>expand</button>}
    </StyledFigure>
  );
};

export default Playlist;
