import React, { forwardRef, RefObject, useContext } from 'react';
import { Link } from 'react-router-dom';

import HomeSVG from 'Component/svgs/HomeSVG/HomeSVG';
import UserSVG from 'Component/svgs/UserSVG/UserSVG';
import NewspaperSVG from 'Component/svgs/NewspaperSVG/NewspaperSVG';
import NotificationSVG from 'Component/svgs/NotificationSVG/NotificationSVG';
import VinylSVG from 'Component/svgs/VinylSVG/VinylSVG';

import { UserContext } from 'Context/UserContext';

import { StyledH1, StyledHeader, StyledLink, StyledNav, StyledNavLi, StyledNavUl } from './Nav.style';
import NewsPaperSVG from 'Component/svgs/NewspaperSVG/NewspaperSVG';

const Nav = () => {
  const { currentPage, notifications, user, userId } = useContext(UserContext);

  return (
    <StyledHeader data-testid="header">
      <StyledH1 data-testid="h1">recordStore</StyledH1>
      {user && (
        <StyledNav data-testid="nav">
          {/* Home */}
          <StyledLink aria-label="Link to Home Page" current={currentPage.includes('home')} to={`/home/${userId}`}>
            <HomeSVG />
          </StyledLink>
          {/* Music */}
          <StyledLink
            aria-label="Link to Music Page"
            current={currentPage.includes('music') || currentPage.includes('playlists')}
            to={`/music/${userId}`}>
            <VinylSVG />
            <StyledNavUl>
              <StyledNavLi>
                <Link to={`/music/${userId}`}>Music</Link>
              </StyledNavLi>
              <StyledNavLi>
                <Link to={`/playlists/${userId}`}>My Playlists</Link>
              </StyledNavLi>
            </StyledNavUl>
          </StyledLink>
          {/* News */}
          <StyledLink aria-label="Link to Home Page" current={currentPage.includes('news')} to={`/news/${userId}`}>
            <NewsPaperSVG />
            <StyledNavUl>
              <StyledNavLi>
                <Link to={`/news/${userId}`}>News</Link>
              </StyledNavLi>
            </StyledNavUl>
          </StyledLink>
          {/* Account */}
          <StyledLink
            aria-label="Link to Edit Account Page"
            current={currentPage.includes('myAccount')}
            to={`/myAccount/${userId}`}>
            <UserSVG />
            <StyledNavUl>
              <StyledNavLi>
                <Link to={`/editAccount/${userId}`}>Edit My Account</Link>
              </StyledNavLi>
            </StyledNavUl>
          </StyledLink>
          {/* Notifications */}
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
