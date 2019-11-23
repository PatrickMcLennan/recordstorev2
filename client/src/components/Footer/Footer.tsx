import React, { forwardRef, RefObject } from 'react';

import { StyledFooter } from './Footer.style';

const Footer = forwardRef((props: {}, ref: RefObject<HTMLElement>) => (
  <StyledFooter ref={ref}>
    <p>
      <sup>&copy;</sup> Patrick McLennan {new Date().getFullYear()}
    </p>
  </StyledFooter>
));

export default Footer;
