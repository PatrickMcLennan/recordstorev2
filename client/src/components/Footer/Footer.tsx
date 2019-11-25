import React, { forwardRef, RefObject } from 'react';

import { StyledFooter } from './Footer.style';

const Footer = () => (
  <StyledFooter>
    <p>
      <sup>&copy;</sup> Patrick McLennan {new Date().getFullYear()}
    </p>
  </StyledFooter>
);

export default Footer;
