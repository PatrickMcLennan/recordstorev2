import React, { forwardRef, RefObject, useContext } from 'react';

import HomeSVG from 'Component/svgs/HomeSVG/HomeSVG';
import UserSVG from 'Component/svgs/UserSVG/UserSVG';
import NotificationSVG from 'Component/svgs/NotificationSVG/NotificationSVG';

import { UserContext } from 'Context/UserContext';

import { StyledH1, StyledHeader, StyledLink, StyledNav } from './Nav.style';

const Nav = forwardRef((props: {}, ref: RefObject<HTMLElement>) => {
  const { currentPage, notifications, user, userId } = useContext(UserContext);

  return (
    <StyledHeader data-testid="header" ref={ref}>
      <StyledH1 data-testid="h1">recordStore</StyledH1>
      {user && (
        <StyledNav data-testid="nav">
          <StyledLink aria-label="Link to Home Page" current={currentPage.includes('home')} to={`/home/${userId}`}>
            <HomeSVG />
            Home
          </StyledLink>
          <StyledLink aria-label="Link to Edit Account Page" current={currentPage.includes('account')} to={`/account/${userId}`}>
            <UserSVG />
            Account
          </StyledLink>
          <StyledLink aria-label="Link to Notifications Page" current={currentPage.includes('notifications')} to={`/notifications/${userId}`}>
            <NotificationSVG />
            Notifications
          </StyledLink>

        </StyledNav>
      )}
    </StyledHeader>
  );
});

export default Nav;
