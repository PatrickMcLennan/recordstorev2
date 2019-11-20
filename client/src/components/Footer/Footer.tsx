import React from 'react';

import { StyledFooter } from './Footer.style';

const Footer: React.FC = () => (
  <StyledFooter>
    <p>&copy;Patrick McLennan {new Date().getFullYear()}</p>
  </StyledFooter>
);

export default Footer;
