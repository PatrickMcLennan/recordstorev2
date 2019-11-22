import styled, { css } from 'styled-components';

export const StyledMain = styled.main`
  ${({ theme: { flexin } }) => flexin('center', 'center', 'column')}
`;

export const StyledForm = styled.form`
  ${({ theme: { flexin } }) => flexin('center', 'center', 'column')}
  margin-top: 40px;
`;

export const StyledLabel = styled.label<{ showCreateAccountModals?: boolean }>`
  margin-bottom: 30px;
  &:first-of-type {
    margin-bottom: 20px;
  }
`;

export const StyledSpan = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export const StyledTextInput = styled.input<{ inputError?: boolean }>`
  ${({ inputError }) =>
    inputError &&
    css`
      border: 1px solid red;
    `}
`;
