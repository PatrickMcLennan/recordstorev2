import React, { useContext, useRef, useState, FormEvent, Ref, RefObject } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ServerContext } from 'Context/ServerContext';
import { UserContext } from 'Context/UserContext';

import usePageMount from 'Hook/usePageMount';
import useUpdateEffect from 'Hook/useUpdateEffect';

import {
  StyledCard,
  StyledCardDiv,
  StyledForm,
  StyledH2,
  StyledH2Span,
  StyledLoginSubmit,
  StyledMain,
  StyledLabel,
  StyledP,
  StyledSpan,
  StyledSVGBox,
  StyledTextInput
} from './Login.style';
import SpotifySVG from 'Component/svgs/SpotifySVG/SpotifySVG';
import YoutubeSVG from 'Component/svgs/YoutubeSVG/YoutubeSVG';

export interface ILoginProps extends RouteComponentProps {}

const invalidEmail = (email: string): boolean => email.length === 0 || (!email.includes('@') && !email.includes('.'));

const handleSubmitFailure = (
  e: FormEvent<HTMLFormElement>,
  callbackEmail: React.Dispatch<boolean>,
  refEmail: RefObject<HTMLElement>,
  wrongEmail: string,
  callbackPassword: React.Dispatch<boolean>,
  refPassword: RefObject<HTMLElement>,
  wrongPassword: string
): void => {
  e.preventDefault();
  callbackEmail(invalidEmail(wrongEmail));
  callbackPassword(wrongPassword.length === 0);

  if (invalidEmail(wrongEmail) || wrongPassword.length === 0) {
    return wrongEmail.length === 0 ? refEmail.current.focus() : refPassword.current.focus();
  }
};

const Login = (props: ILoginProps) => {
  const { history } = props;
  const { axiosLogin } = useContext(ServerContext);
  const { userId, setUser, setUserId } = useContext(UserContext);

  const [showCreateAccountModals, setShowCreateAccountModals]: [boolean, any] = useState(false);

  // Log In Fields
  const [email, setEmail]: [string, any] = useState('');
  const [password, setPassword]: [string, any] = useState('');

  // Create Account Fields
  const [firstName, setFirstName]: [string, any] = useState('');
  const [lastName, setLastName]: [string, any] = useState('');

  // Error Booleans to toggle styles on invalid inputs
  const [emailError, setEmailError]: [boolean, any] = useState(false);
  const [passwordError, setPasswordError]: [boolean, any] = useState(false);

  // Refs for accessibility
  const emailRef: Ref<HTMLInputElement> = useRef(null);
  const passwordRef: Ref<HTMLInputElement> = useRef(null);

  usePageMount('Log In');

  useUpdateEffect(() => {
    setEmailError(invalidEmail(email));
  }, [email]);

  useUpdateEffect(() => {
    setPasswordError(password.length === 0);
  }, [password]);

  return (
    <StyledMain>
      <StyledCard>
        <StyledCardDiv>
          <StyledH2>News</StyledH2>
          <StyledH2Span>-</StyledH2Span>
          <StyledH2>Music</StyledH2>
          <StyledH2Span>-</StyledH2Span>
          <StyledH2>Lorum</StyledH2>

          <StyledP>
            An account with recordStore lets you read the latest music news, stream new music, create + share playlists with
            friends and more.
          </StyledP>

          <StyledSVGBox>
            <SpotifySVG />
            <YoutubeSVG />
          </StyledSVGBox>
        </StyledCardDiv>
        <StyledForm
          data-testid="form"
          onSubmit={(e: FormEvent<HTMLFormElement>) =>
            invalidEmail(email) || password.length === 0
              ? handleSubmitFailure(e, setEmailError, emailRef, email, setPasswordError, passwordRef, password)
              : axiosLogin(history, setUser, setUserId)
          }>
          <StyledLabel htmlFor="email">
            <StyledSpan>Email: *</StyledSpan>
            <StyledTextInput
              aria-invalid={invalidEmail(email)}
              aria-required="true"
              autoFocus={true}
              data-testid="email-input"
              inputError={emailError}
              id="email"
              name="email"
              onChange={({ target: { value } }) => setEmail(value)}
              ref={emailRef}
              title="Email"
              type="email"
              value={email}
            />
          </StyledLabel>
          <StyledLabel htmlFor="password" showCreateAccountModals={showCreateAccountModals}>
            <StyledSpan>Password: *</StyledSpan>
            <StyledTextInput
              aria-invalid={password.length <= 8}
              aria-required="true"
              data-testid="password-input"
              id="password"
              inputError={passwordError}
              name="password"
              onChange={({ target: { value } }) => setPassword(value)}
              ref={passwordRef}
              title="password"
              type="password"
              value={password}
            />
          </StyledLabel>
          <StyledLoginSubmit
            aria-label="Log In"
            data-testid="submit"
            title="Login"
            type="submit"
            value={showCreateAccountModals ? 'Create My Account' : 'Log In'}
          />
        </StyledForm>
        {/* <div aria-modal="true">
        <StyledLabel htmlFor="firstName" showCreateAccountModals={showCreateAccountModals}>
          <StyledSpan>First Name: *</StyledSpan>
          <StyledTextInput
            aria-invalid={showCreateAccountModals && firstName.length === 0}
            aria-required={showCreateAccountModals}
            id="firstName"
            name="firstName"
            onChange={({ target: { value } }) => setFirstName(value)}
            title="First Name"
            type="text"
            value={firstName}
          />
        </StyledLabel>
        <StyledLabel htmlFor="lastName" showCreateAccountModals={showCreateAccountModals}>
          <StyledSpan>Last Name: *</StyledSpan>
          <StyledTextInput
            aria-invalid={showCreateAccountModals && lastName.length === 0}
            aria-required={showCreateAccountModals}
            id="lastName"
            name="lastName"
            onChange={({ target: { value } }) => setLastName(value)}
            title="Last Name"
            type="text"
            value={lastName}
          />
        </StyledLabel>
      </div>

      <button
        aria-label="Show the Create Account Modals"
        onClick={() => setShowCreateAccountModals(!showCreateAccountModals)}
        title="Create An Account">
        Create An Account
      </button> */}
      </StyledCard>
    </StyledMain>
  );
};

export const helpers = {
  handleSubmitFailure,
  invalidEmail
};

export default Login;
