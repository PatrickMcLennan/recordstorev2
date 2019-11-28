import styled, { css, StyledComponent, StyledComponentBase } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader: StyledComponent<'header', {}> = styled.header`
  ${({ theme: { flexin } }) => flexin('space-between')}
  ${({ theme: { mainPadding } }) => mainPadding}
  ${({ theme: { headerFooter } }) => headerFooter}
`;

export const StyledH1: StyledComponent<'h1', {}> = styled.h1`
  padding: 10px 0;
  font-weight: 300;
  letter-spacing: 0.75px;
`;

export const StyledNav: StyledComponent<'nav', {}> = styled.nav`
  ${({ theme: { flexin } }) => flexin()}
  align-self: stretch;
`;

export const StyledLink: StyledComponent<typeof Link, any, { current: Boolean }> = styled(Link)`
  ${({ theme: { flexin } }) => flexin('center', 'center', 'column')}
  position: relative;
  padding: 10px 20px;
  height: 100%;
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

  &:hover > ul,
  &:focus > ul {
    opacity: 1;
    right: 0;
    z-index: 100;
  }
`;

export const StyledNavUl: StyledComponent<'ul', {}> = styled.ul`
  position: absolute;
  top: 100%;
  bottom: 0;
  right: 5%;
  opacity: 0;
  transform-origin: right;
  transition: all 0.3s ease-in-out;
  /* z-index: 100; */
`;

export const StyledNavLi: StyledComponent<'li', {}> = styled.li`
  background-color: white;
  color: ${({ theme: { mainDarkBlue } }) => mainDarkBlue};
  font-weight: 500;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  z-index: 100;

  & > a {
    display: block;
    padding: 10px 20px;
  }

  &:hover {
    background-color: transparent;
    color: white;
  }
`;
