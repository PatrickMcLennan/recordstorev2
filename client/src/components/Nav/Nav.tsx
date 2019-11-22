import React, { forwardRef, RefObject } from 'react';
import { Link } from 'react-router-dom';

const Nav = forwardRef((props, ref: RefObject<HTMLElement>) => (
  <header ref={ref}>
    <h1>recordStore</h1>
    <nav></nav>
  </header>
));

export default Nav;
