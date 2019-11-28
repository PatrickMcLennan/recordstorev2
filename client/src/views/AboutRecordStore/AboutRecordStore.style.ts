import styled, { css, StyledComponent } from 'styled-components';

export const StyledH2: StyledComponent<'h2', {}> = styled.h2`
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 40px;
  margin-top: 20px;
  text-transform: uppercase;
`;

export const StyledP: StyledComponent<'p', {}> = styled.p`
  max-width: 500px;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 25px;

  &:first-letter {
    margin-left: 25px;
  }

  p {
    margin: 25px 0;
  }

  span {
    display: block;
    font-style: italic;
    text-align: right;
  }
`;
