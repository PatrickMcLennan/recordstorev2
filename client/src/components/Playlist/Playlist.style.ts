import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  line-height: 23px;

  svg {
    height: 22.5px;

    & > * {
      fill: white;
    }
  }
`;

export const StyledCollage = styled.div<{ artwork: string[] }>`
  display: grid;
`;

export const StyledFigure = styled.figure`
  ${({ theme: { borderSettings } }) => borderSettings}
  padding: 10px;
`;

export const StyledH6 = styled.h6`
  font-size: 40px;
  font-weight: 900;
`;

export const StyledLi = styled.li`
  ${({ theme: { flexin } }) => flexin('space-between')};
  padding: 5px;
  border: 1px solid white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: white;
    border: 1px solid ${({ theme: { darkBlue } }) => darkBlue};
    color: ${({ theme: { darkBlue } }) => darkBlue} !important;
  }
`;

export const StyledSpan = styled.span`
  display: block;
  font-weight: 300;
  text-align: right;
`;

export const StyledSVGBox = styled.div`
  display: inline-block;
  svg {
    height: 22.5px;
    margin: 0 10px;

    &:last-of-type {
      margin-right: 0;
    }

    & > * {
      fill: white;
    }
  }
`;
