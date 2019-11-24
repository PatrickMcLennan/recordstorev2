import React from 'react';

import { TopBorder, RightBorder, BottomBorder, LeftBorder } from './Borders.style';

const Borders = () => {
  return (
    <>
      <TopBorder aria-hidden="true" data-testid="top-border" />
      <RightBorder aria-hidden="true" data-testid="right-border" />
      <BottomBorder aria-hidden="true" data-testid="bottom-border" />
      <LeftBorder aria-hidden="true" data-testid="left-border" />
    </>
  );
};

export default Borders;
