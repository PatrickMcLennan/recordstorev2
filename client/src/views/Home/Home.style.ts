import styled, { css, StyledComponent } from 'styled-components';

export const StyledH2: StyledComponent<'h2', {}> = styled.h2`
  ${({ theme: { mainH2 } }) => mainH2}
`;
