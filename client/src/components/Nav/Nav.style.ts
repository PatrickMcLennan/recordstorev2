import styled, { css, StyledComponent, StyledComponentBase } from 'styled-components';
import { Link } from 'react-router-dom';
import { RefObject } from 'react';

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

export const StyledLink: StyledComponent<
  typeof Link,
  any,
  { current: Boolean; ref: RefObject<Link<HTMLAnchorElement>> }
> = styled(Link)`
  ${({ theme: { flexin } }) => flexin('flex-end', 'center', 'column')}
  position: relative;
  padding: 10px 0 10px 30px;
  height: 100%;
  border-bottom: 1px solid white;
  transition: all 0.3s ease-in-out;

  &:not(:last-child) {
    margin-right: 10px;
  }

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
  &:focus > ul,
  ul > * > *:focus {
    opacity: 1;
    right: 0;
    z-index: 100;
  }
`;

export const StyledNavUl: StyledComponent<'ul', {}> = styled.ul`
  ${({ theme: { mainDropdownUl } }) => mainDropdownUl}
  position: absolute;
  top: 100%;
  bottom: 0;
  right: 5%;
  opacity: 0;
  /* z-index: 100; */
`;
