import React from 'react';

import { StyledFooter } from './Footer.style';
import { Link } from 'react-router-dom';

export interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => (
  <StyledFooter>
    <p>
      <sup>&copy;</sup> Patrick McLennan {new Date().getFullYear()}
    </p>
    <Link aria-label="Visit the About recordStore Page" to="/aboutRecordStore">
      About recordStore
    </Link>
  </StyledFooter>
);

export default Footer;
