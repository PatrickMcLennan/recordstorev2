import styled, { StyledComponent } from 'styled-components';

const borderStyles: StyledComponent<'span', {}> = styled.span`
  position: absolute;
  background-color: white;
  transition: all 0.15s ease-in-out;
`;

export const TopBorder: StyledComponent<'span', {}> = styled(borderStyles)`
  height: 1px;
  top: 0;
  right: 0;
  bottom: calc(100% - 1px);
  left: 0;
  transition-delay: 0;
`;
export const RightBorder: StyledComponent<'span', {}> = styled(borderStyles)`
  width: 1px;
  top: 0;
  right: 0;
  bottom: 0;
  left: calc(100% - 1px);
  transition-delay: 0.025s;
`;
export const BottomBorder: StyledComponent<'span', {}> = styled(borderStyles)`
  height: 1px;
  top: calc(100% - 1px);
  right: 0;
  bottom: 0;
  left: 0;
  transition-delay: 0.05s;
`;
export const LeftBorder: StyledComponent<'span', {}> = styled(borderStyles)`
  width: 1px;
  top: 0;
  bottom: 0;
  right: calc(100% - 1px);
  left: 0;
  transition-delay: 0.075s;
`;
