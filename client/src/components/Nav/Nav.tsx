import React, { forwardRef, RefObject, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from 'Context/UserContext';

import { StyledH1, StyledHeader, StyledLi, StyledNav } from './Nav.style';

const Nav = forwardRef((props: {}, ref: RefObject<HTMLElement>) => {
  const { user, userId } = useContext(UserContext);
  return (
    <StyledHeader ref={ref}>
      <StyledH1>recordStore</StyledH1>
      {user && (
        <StyledNav>
          <ul role="menu">
            <StyledLi role="menuitem" user={user}>
              <Link aria-label="Link to Home Page" to={`/home/${userId}`}>
                Home
              </Link>
            </StyledLi>
          </ul>
        </StyledNav>
      )}
    </StyledHeader>
  );
});

export default Nav;
