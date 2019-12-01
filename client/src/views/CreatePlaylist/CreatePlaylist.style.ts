import styled, { StyledComponent } from 'styled-components';

export const StyledAudienceDiv: StyledComponent<'div', {}> = styled.div`
  display: block;
`;

export const StyledCheckBox: StyledComponent<'button', {}, { currentlyChecked: boolean }> = styled.button`
  ${({ theme: { checkBox } }) => checkBox};
  height: 30px;
  width: 30px;
  vertical-align: top;

  &::after {
    height: 30px;
    width: 30px;
  }
`;

export const StyledCheckBoxBox: StyledComponent<'div', {}> = styled.div`
  ${({ theme: { flexin } }) => flexin('space-around', 'flex-start')};
`;

export const StyledCheckBoxLabel: StyledComponent<'label', {}> = styled.label`
  cursor: pointer;

  span:first-of-type {
    display: block;
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 22px;
  }

  span:nth-of-type(2) {
    display: inline-block;
    line-height: 22px;
    max-width: 250px;
    margin-left: 15px;
    opacity: 0.75;
  }
`;

export const StyledGenresButtons: StyledComponent<'div', {}> = styled.div`
  display: inline-block;
  height: 200px;
  min-width: 50%;
`;

export const StyledGenresButton: StyledComponent<'button', {}> = styled.button`
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid white;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 19px;
  text-transform: uppercase;
`;

export const StyledGenresLabel: StyledComponent<'label', {}> = styled.label`
  ${({ theme: { flexin } }) => flexin('flex-start', 'flex-start')};
  display: inline-flex;
  position: relative;

  span {
    display: block;
    margin-bottom: 15px;
  }

  input[type='text'] {
    ${({ theme: { whiteTextInput } }) => whiteTextInput}
  }
`;

export const StyledGenresUl: StyledComponent<'ul', {}> = styled.ul`
  ${({ theme: { mainDropdownUl } }) => mainDropdownUl}
  position: absolute;
  top: 100%;
  bottom: 0%;
  right: 0;
  text-align: right;

  button {
    color: ${({ theme: { mainDarkBlue } }) => mainDarkBlue};
  }
`;

export const StyledH4: StyledComponent<'h4', {}> = styled.h4`
  display: block;
  margin-bottom: 15px;
  font-size: 25px;
  line-height: 30px;
`;

export const StyledNameLabel: StyledComponent<'label', {}> = styled.label`
  display: inline-block;
  width: 50%;
`;

export const StyledTextInput: StyledComponent<'input', {}, { inputError: boolean }> = styled.input`
  ${({ theme: { whiteTextInput } }) => whiteTextInput};
  display: block;
`;
