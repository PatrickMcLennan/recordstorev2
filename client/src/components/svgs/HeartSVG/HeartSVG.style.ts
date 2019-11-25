import styled, { css } from 'styled-components';

export const StyledSVG = styled.svg<{ userLiked: boolean }>`
  ${({ userLiked }) =>
    userLiked &&
    css`
      fill: white;
    `}
`;
