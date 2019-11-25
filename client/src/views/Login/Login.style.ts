import styled, { css } from 'styled-components';

export const StyledCard = styled.div`
  ${({ theme: { flexin } }) => flexin()}
  padding: 20px;
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.75) 50%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.005) 55%,
    transparent 52%
  );
`;

export const StyledCardDiv = styled.div`
  align-self: stretch;
  margin-right: 10px;
`;

export const StyledDiv = styled.div`
  ${({ theme: { flexin } }) => flexin()}
`;

export const StyledForm = styled.form`
  padding-top: 150px;
`;

export const StyledH2 = styled.h2`
  display: inline-block;
  color: ${({ theme: { mainDarkBlue } }) => mainDarkBlue};
  font-size: 26px;
  line-height: 30px;
  font-weight: 100;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const StyledH2Span = styled.span`
  display: inline-block;
  height: 29px;
  margin: 0 5px;
  color: ${({ theme: { mainDarkBlue } }) => mainDarkBlue};
  vertical-align: middle;
`;

export const StyledLabel = styled.label<{ showCreateAccountModals?: boolean }>`
  display: block;
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  &:first-of-type {
    margin-bottom: 20px;
  }
`;

export const StyledLoginSubmit = styled.input`
  display: block;
  margin: 0 auto;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid white;
  cursor: pointer;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  ${({ theme: { buttonAnimation } }) => buttonAnimation}
`;

export const StyledMain = styled.main`
  ${({ theme: { flexin } }) => flexin()};
  ${props => props.theme.mainHeight}
`;

export const StyledP = styled.p`
  position: relative;
  max-width: 320px;
  margin-top: 20px;
  padding: 5px 20px;
  color: ${({ theme: { mainDarkBlue } }) => mainDarkBlue};
  font-size: 18px;
  line-height: 24px;
  text-align: left;

  &::before {
    content: '';
    display: inline-block;
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    right: calc(100% - 2px);
    bottom: 0;
    left: 0;
    background-color: ${({ theme: { mainDarkBlue } }) => mainDarkBlue};
  }
`;

export const StyledSpan = styled.span`
  display: block;
  margin-bottom: 10px;
  text-align: right;
`;

export const StyledSVGBox = styled.div`
  ${({ theme: { flexin } }) => flexin('space-between')};
  height: 30px;
`;

export const StyledTextInput = styled.input<{ inputError?: boolean }>`
  padding: 5px;
  background-color: transparent;
  border: 1px solid white;
  font-size: 20px;
  line-height: 22px;
  ${({ inputError }) =>
    inputError &&
    css`
      border: 1px solid red;
    `};
`;
