import React, { useContext, useEffect, useRef, useState, FormEvent, Ref } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ServerContext } from 'Context/ServerContext';

import useUpdateEffect from 'Hook/useUpdateEffect';

import { StyledForm, StyledMain, StyledLabel, StyledSpan, StyledTextInput } from './Login.style';

const Login = (props: RouteComponentProps) => {
  const { history } = props;
  const { login } = useContext(ServerContext);

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

  const handleSubmitFailure = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setEmailError(email.length === 0);
    setPasswordError(password.length === 0);

    if (email.length === 0 || password.length === 0) {
      return email.length === 0 ? emailRef.current.focus() : passwordRef.current.focus();
    }
  };

  useUpdateEffect(() => {
    setEmailError(email.length === 0);
  }, [email]);

  useUpdateEffect(() => {
    setPasswordError(password.length === 0);
  }, [password]);

  return (
    <StyledMain>
      <StyledForm
        data-testid="form"
        onSubmit={(e: FormEvent<HTMLFormElement>) =>
          email.length === 0 || password.length === 0 ? handleSubmitFailure(e) : login(history)
        }>
        <StyledLabel htmlFor="email">
          <StyledSpan>Email: *</StyledSpan>
          <StyledTextInput
            aria-invalid={email.length === 0 || (!email.includes('@') && !email.includes('.'))}
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
        <input
          aria-label="Log In"
          data-testid="submit"
          title="Login"
          type="submit"
          value={showCreateAccountModals ? 'Create My Account' : 'Log In'}
        />
      </StyledForm>
      <div aria-modal="true">
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
      </button>
    </StyledMain>
  );
};

export default Login;
