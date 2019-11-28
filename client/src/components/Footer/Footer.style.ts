import styled, { StyledComponent } from 'styled-components';

export const StyledFooter: StyledComponent<'footer', {}> = styled.footer`
${({ theme: { flexin } }) => flexin('space-between')}
  ${({ theme: { headerFooter } }) => headerFooter}
  ${({ theme: { mainPadding } }) => mainPadding}
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;
  font-weight: 300;
`;
