import React, { RefObject, useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import HomeSVG from 'Component/svgs/HomeSVG/HomeSVG';
import UserSVG from 'Component/svgs/UserSVG/UserSVG';
import NewsPaperSVG from 'Component/svgs/NewspaperSVG/NewspaperSVG';
import NotificationSVG from 'Component/svgs/NotificationSVG/NotificationSVG';
import VinylSVG from 'Component/svgs/VinylSVG/VinylSVG';

import { UserContext } from 'Context/UserContext';

import useDetectShift from 'Hook/useDetectShift';

import { StyledH1, StyledHeader, StyledLink, StyledNav, StyledNavLi, StyledNavUl } from './Nav.style';

export interface INavProps {}

const Nav: React.FC<INavProps> = () => {
  const { currentPage, notifications, user, userId } = useContext(UserContext);
  const shiftIsPressed = useDetectShift();
  // Main Nav Icons
  const [homeRef, musicRef, newsRef, accountRef, notificationsRef]: [
    RefObject<Link<HTMLAnchorElement>>,
    RefObject<Link<HTMLAnchorElement>>,
    RefObject<Link<HTMLAnchorElement>>,
    RefObject<Link<HTMLAnchorElement>>,
    RefObject<Link<HTMLAnchorElement>>
  ] = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const mainRefs: RefObject<Link<HTMLAnchorElement>>[] = [homeRef, musicRef, newsRef, accountRef, notificationsRef];

  // Handle Keyboard input for Icon Nav Elements
  const navKeyHandler = (e: React.KeyboardEvent<HTMLAnchorElement>, ref: RefObject<Link<HTMLAnchorElement>>) => {
    if (e.key === 'Right' || e.key === 'ArrowRight' || (ref !== mainRefs[mainRefs.length - 1] && e.key === 'Tab')) {
      e.preventDefault();
      // Right Arrow or Tab when current Icon is not last Element focused
      return mainRefs[mainRefs.indexOf(ref) + 1].current.focus();
    } else if (e.key === 'Left' || e.key === 'ArrowLeft' || (ref !== mainRefs[0] && shiftIsPressed && e.key === 'Tab')) {
      // Left Arrow or Shift+Tab when current Icon is not first Element focused
      e.preventDefault();
      return mainRefs[mainRefs.indexOf(ref) - 1].current.focus();
    } else if (e.key === 'Down' || e.key == 'ArrowDown') {
      e.preventDefault();
      return ref.current.querySelectorAll('a').length >= 1 ? ref.current.querySelectorAll('a')[0].focus() : null;
    } else if (e.key === 'Up' || e.key === 'ArrowUp') {
      e.preventDefault();
      return ref.current.querySelectorAll('a').length >= 1
        ? ref.current.querySelectorAll('a')[ref.current.querySelectorAll('a').length - 1].focus()
        : null;
    }
  };

  // Handle Keyboard input for Nav list Elements
  const liKeyHandler = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    selectorText: string,
    parentRef: RefObject<Link<HTMLAnchorElement>>
  ) => {
    const allItems: HTMLAnchorElement[] = [...parentRef.current.querySelectorAll('a')];
    const current: HTMLAnchorElement = allItems.find(item => item.textContent === selectorText);

    if (e.key === 'Up' || e.key === 'ArrowUp') {
      // Move up the list, send focus to Icon element if at top of list
      e.preventDefault();
      return allItems.indexOf(current) === 0 ? parentRef.current.focus() : allItems[allItems.indexOf(current) - 1].focus();
    } else if (e.key === 'Down' || e.key === 'ArrowDown') {
      // Move down the list, send focus to Icon element if at bottom of list
      e.preventDefault();
      return allItems.indexOf(current) === allItems.length
        ? parentRef.current.focus()
        : allItems[allItems.indexOf(current) + 1].focus();
    } else if (e.key === 'Right' || e.key === 'ArrowRight') {
      // move to next Icon List if applicable, get out if not
      e.preventDefault();
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      // move to previous Icon List if applicable, get out if not
      e.preventDefault();
    }
  };

  return (
    <StyledHeader data-testid="header">
      <StyledH1 data-testid="h1">recordStore</StyledH1>
      {user && (
        <StyledNav data-testid="nav">
          {/* Home */}
          <StyledLink
            aria-label="Link to Home Page"
            current={currentPage.includes('home')}
            onKeyDown={e => navKeyHandler(e, homeRef)}
            ref={homeRef}
            to={`/home/${userId}`}>
            <HomeSVG />
          </StyledLink>
          {/* Music */}
          <StyledLink
            aria-label="Link to Music Page"
            current={currentPage.includes('music') || currentPage.includes('playlists')}
            onKeyDown={e => navKeyHandler(e, musicRef)}
            ref={musicRef}
            to={`/music/${userId}`}>
            <VinylSVG />
            <StyledNavUl>
              <li>
                <Link onKeyDown={e => liKeyHandler(e, 'Music', musicRef)} to={`/music/${userId}`}>
                  Music
                </Link>
              </li>
              <li>
                <Link onKeyDown={e => liKeyHandler(e, 'My Playlists', musicRef)} to={`/playlists/${userId}`}>
                  My Playlists
                </Link>
              </li>
            </StyledNavUl>
          </StyledLink>
          {/* News */}
          <StyledLink
            aria-label="Link to Home Page"
            current={currentPage.includes('news')}
            onKeyDown={e => navKeyHandler(e, newsRef)}
            ref={newsRef}
            to={`/news/${userId}`}>
            <NewsPaperSVG />
            <StyledNavUl>
              <li>
                <Link onKeyDown={e => liKeyHandler(e, 'News', newsRef)} to={`/news/${userId}`}>
                  News
                </Link>
              </li>
            </StyledNavUl>
          </StyledLink>
          {/* Account */}
          <StyledLink
            aria-label="Link to Edit Account Page"
            current={currentPage.includes('myAccount')}
            onKeyDown={e => navKeyHandler(e, accountRef)}
            ref={accountRef}
            to={`/myAccount/${userId}`}>
            <UserSVG />
            <StyledNavUl>
              <li>
                <Link onKeyDown={e => liKeyHandler(e, 'Edit My Account', accountRef)} to={`/editAccount/${userId}`}>
                  Edit My Account
                </Link>
              </li>
            </StyledNavUl>
          </StyledLink>
          {/* Notifications */}
          <StyledLink
            aria-label="Link to Notifications Page"
            current={currentPage.includes('notifications')}
            onKeyDown={e => navKeyHandler(e, notificationsRef)}
            ref={notificationsRef}
            to={`/notifications/${userId}`}>
            <NotificationSVG />
          </StyledLink>
        </StyledNav>
      )}
    </StyledHeader>
  );
};

export default Nav;
