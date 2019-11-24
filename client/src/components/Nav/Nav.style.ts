import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  ${({ theme: { flexin } }) => flexin('space-between')}
  ${({ theme: { mainPadding } }) => mainPadding}
  ${({ theme: { headerFooter } }) => headerFooter}
  overflow: hidden;
`;

export const StyledH1 = styled.h1`
  padding: 10px 0;
  font-weight: 300;
  letter-spacing: 0.75px;
`;

export const StyledNav = styled.nav`
  ${({ theme: { flexin } }) => flexin()}
  align-self: stretch;
`;

export const StyledLink = styled(Link)<{ current: boolean }>`
  ${({ theme: { flexin } }) => flexin('center', 'center', 'column')}
  padding: 10px 10px;
  height: 100%;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.3s ease-in-out;

  svg {
    height: 25px;
    margin-bottom: 5px;
    transition: all 0.3s ease-in-out;

    > * {
      fill: white;

      ${({ current }) =>
        current &&
        css`
          fill: green;
        `}
    }
  }
`;
