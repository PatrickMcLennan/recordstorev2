import styled, { css, StyledComponent } from 'styled-components';

export const StyledForm = styled.form`
  ${({ theme: { flexin } }) => flexin('center', 'center', 'column')}
  margin-top: 40px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 30px;
  &:first-of-type {
    margin-bottom: 20px;
  }
`;

export const StyledSpan = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export const StyledTextInput = styled.input`
  ${({ inputError }) =>
    inputError &&
    css`
      border: 1px solid red;
    `}
`;
