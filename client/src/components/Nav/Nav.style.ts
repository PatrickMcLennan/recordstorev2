import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  ${({ theme: { flexin } }) => flexin('space-between')}
  ${({ theme: { mainPadding } }) => mainPadding}
  ${({ theme: { headerFooter } }) => headerFooter}
  overflow: hidden;
`;

export const StyledH1 = styled.h1`
  font-weight: 300;
  letter-spacing: 0.75px;
`;

export const StyledNav = styled.nav`
  background-color: red;
`;

export const StyledLi = styled.li<{ user: boolean }>`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transform: translateY(300%);
  transition: all 0.3s ease-in-out;

  ${({ user }) =>
    user &&
    css`
      transform: translateY(0);
    `}
`;
