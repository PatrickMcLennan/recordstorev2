import React, { useContext, useState } from 'react';

import SpotifySVG from 'Component/svgs/SpotifySVG/SpotifySVG';
import HeartSVG from 'Component/svgs/HeartSVG/HeartSVG';
import PlaySVG from 'Component/svgs/PlaySVG/PlaySVG';

import { ISong } from 'Utility/dictionary';

import { StyledButton, StyledCollage, StyledFigure, StyledH6, StyledLi, StyledSpan, StyledSVGBox } from './Playlist.style';
import Borders from 'Component/Borders/Borders';

interface IProps {
  playlistTitle: string;
  tracks: ISong[];
  userName: string;
}

const showServiceSVG = (service: string, songTitle: string) => {
  if (service === 'spotify') {
    return <SpotifySVG aria-label={`Open ${songTitle} in Spotify`} />;
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
        {tracks.map(({ songTitle, songArtist, service }, i) =>
          expanded ? (
            <StyledLi>
              <StyledButton>
                <PlaySVG />
                <span>{songTitle}</span>
                <span>{songArtist}</span>
              </StyledButton>

              <StyledSVGBox>
                {showServiceSVG(service, songTitle)}
                <HeartSVG />
              </StyledSVGBox>
            </StyledLi>
          ) : (
            i <= 15 && (
              <StyledLi>
                <StyledButton>
                  <PlaySVG />
                  <span>{songTitle}</span>
                  <span>{songArtist}</span>
                </StyledButton>

                <StyledSVGBox>
                  {showServiceSVG(service, songTitle)}
                  <HeartSVG />
                </StyledSVGBox>
              </StyledLi>
            )
          )
        )}
      </ul>
    </StyledFigure>
  );
};

export default Playlist;
