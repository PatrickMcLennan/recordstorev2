import styled from 'styled-components';

export const StyledFooter = styled.footer`
  ${({ theme: { headerFooter } }) => headerFooter}
  ${({ theme: { mainPadding } }) => mainPadding}
  width: 100%;
  position: absolute;
  bottom: 0;
  font-weight: 300;
`;
