import React, { forwardRef, RefObject } from 'react';

import { StyledFooter } from './Footer.style';
import { Link } from 'react-router-dom';

const Footer = () => (
  <StyledFooter>
    <p>
      <sup>&copy;</sup> Patrick McLennan {new Date().getFullYear()}
    </p>
    <Link to="/aboutRecordStore">About recordStore</Link>
  </StyledFooter>
);

export default Footer;
