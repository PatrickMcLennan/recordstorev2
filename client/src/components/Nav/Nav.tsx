import React, { forwardRef, RefObject, useContext } from 'react';
import { Link } from 'react-router-dom';

import HomeSVG from 'Component/svgs/HomeSVG/HomeSVG';
import UserSVG from 'Component/svgs/UserSVG/UserSVG';
import NotificationSVG from 'Component/svgs/NotificationSVG/NotificationSVG';

import { UserContext } from 'Context/UserContext';

import { StyledH1, StyledHeader, StyledLink, StyledNav, StyledNavLi, StyledNavUl } from './Nav.style';

const Nav = () => {
  const { currentPage, notifications, user, userId } = useContext(UserContext);

  return (
    <StyledHeader data-testid="header">
      <StyledH1 data-testid="h1">recordStore</StyledH1>
      {user && (
        <StyledNav data-testid="nav">
          <StyledLink aria-label="Link to Home Page" current={currentPage.includes('home')} to={`/home/${userId}`}>
            <HomeSVG />
            <StyledNavUl>
              <StyledNavLi>
                <Link to={`/news/${userId}`}>News</Link>
              </StyledNavLi>
              <StyledNavLi>
                <Link to={`/music/${userId}`}>Music</Link>
              </StyledNavLi>
              <StyledNavLi>
                <Link to={`/news/${userId}`}>Something</Link>
              </StyledNavLi>
            </StyledNavUl>
          </StyledLink>
          <StyledLink
            aria-label="Link to Edit Account Page"
            current={currentPage.includes('account')}
            to={`/account/${userId}`}>
            <UserSVG />
            <StyledNavUl>
              <StyledNavLi>
                <Link to={`/editAccount/${userId}`}>News</Link>
              </StyledNavLi>
              <StyledNavLi>
                <Link to={`/Music/${userId}`}>Music</Link>
              </StyledNavLi>
              <StyledNavLi>
                <Link to={`/news/${userId}`}>Something</Link>
              </StyledNavLi>
            </StyledNavUl>
          </StyledLink>
          <StyledLink
            aria-label="Link to Notifications Page"
            current={currentPage.includes('notifications')}
            to={`/notifications/${userId}`}>
            <NotificationSVG />
          </StyledLink>
        </StyledNav>
      )}
    </StyledHeader>
  );
};

export default Nav;
