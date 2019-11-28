import styled, { css, StyledComponent } from 'styled-components';

export const StyledButton: StyledComponent<'button', {}> = styled.button`
  ${({ theme: { flexin } }) => flexin('flex-start')}
  flex: 1;
  align-self: stretch;
  padding: 10px 10px 10px 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  line-height: 23px;

  span {
    flex: 1;
  }

  svg {
    height: 22.5px;

    & > * {
      fill: white;
    }
  }
`;

export const StyledCollage: StyledComponent<'div', {}, { artwork: string[] }> = styled.div`
  display: grid;
`;

export const StyledFigure: StyledComponent<'figure', {}> = styled.figure`
  ${({ theme: { borderSettings } }) => borderSettings}
  padding: 10px;
`;

export const StyledH6: StyledComponent<'h6', {}> = styled.h6`
  font-size: 40px;
  font-weight: 900;
`;

export const StyledImg: StyledComponent<'img', {}> = styled.img`
  display: inline-block;
  margin-left: 20px;
  height: 50px;
  width: 50px;
  border: 1px solid white;
`;

export const StyledLi: StyledComponent<'li', {}> = styled.li`
  ${({ theme: { flexin } }) => flexin('space-between')};
  ${({ theme: { buttonAnimation } }) => buttonAnimation}
  padding: 0 10px;
  border: 1px solid white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  & > button:focus {
    background-color: white;
    border: 1px solid ${({ theme: { mainDarkBlue } }) => mainDarkBlue};

    span {
      color: ${({ theme: { mainDarkBlue } }) => mainDarkBlue};
    }

    svg {
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }

      & > * {
        fill: ${({ theme: { mainDarkBlue } }) => mainDarkBlue};
      }
    }
  }
`;

export const StyledSpan: StyledComponent<'span', {}> = styled.span`
  display: block;
  font-weight: 300;
  text-align: right;
`;

export const StyledSVGBox: StyledComponent<'div', {}> = styled.div`
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
