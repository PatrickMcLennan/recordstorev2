import styled, { css } from 'styled-components';

export const StyledCard = styled.div`
  ${({ theme: { flexin } }) => flexin('space-between')}
  padding: 20px;
  height: 65vh;
  width: 75vw;
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.75) 50%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.005) 55%,
    transparent 52%
  );
`;

export const StyledCardDiv = styled.div`
  ${({ theme: { flexin } }) => flexin('flex-start', 'flex-start', 'column')}
  align-self: stretch;
  margin-right: 10px;
`;

export const StyledCreateAccountButton = styled.button`
  margin-top: auto;
  background: none;
  border: 1px solid ${({ theme: { mainDarkBlue } }) => mainDarkBlue};
  color: ${({ theme: { mainDarkBlue } }) => mainDarkBlue};
`;

export const StyledDiv = styled.div`
  ${({ theme: { flexin } }) => flexin()}
`;

export const StyledForm = styled.form`
  ${({ theme: { flexin } }) => flexin('flex-end', 'flex-end', 'column')}
  align-self: stretch;
`;

export const StyledH2 = styled.h2`
  display: block;
  color: ${({ theme: { mainDarkBlue } }) => mainDarkBlue};
  font-size: 26px;
  line-height: 30px;
  font-size: 35px;
  font-weight: 100;
  letter-spacing: 1px;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledLabel = styled.label<{ showCreateAccountModals?: boolean }>`
  display: block;
  margin-bottom: 60px;
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

export const StyledFormTitleSpan = styled.span`
  display: block;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
`;

export const StyledScrollWindow = styled.div`
  ${({ theme: { flexin } }) => flexin()};
  margin-top: 20px;
  margin-right: 50px;
  margin-left: 50px;
  padding: 10px 0;
  box-shadow: inset 33px 0 10px 0px rgba(255, 255, 255, 0.75), inset -33px 0px 10px 0px rgba(255, 255, 255, 0.75);

  svg {
    margin-right: 20px;
    height: 30px;
    width: 30px;
  }
`;

export const StyledSpan = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 23px;
  font-weight: 300;
  line-height: 27px;
  text-align: right;
`;

export const StyledSVGBox = styled.div`
  ${({ theme: { flexin } }) => flexin('space-between')};
  height: 30px;
`;

export const StyledTextInput = styled.input<{ inputError?: boolean }>`
  ${({ theme: { whiteTextInput } }) => whiteTextInput}
`;
