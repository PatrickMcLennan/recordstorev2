import React, { useContext, useEffect, useRef, useState, FormEvent, Ref } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ServerContext } from 'Context/ServerContext';

import { StyledForm, StyledLabel, StyledSpan, StyledTextInput } from './Login.style';

const Login = (props: RouteComponentProps) => {
  const { history } = props;
  const { login } = useContext(ServerContext);

  // Fields
  const [email, setEmail]: [string, any] = useState('');
  const [password, setPassword]: [string, any] = useState('');

  // Error Booleans to toggle styles on invalid inputs
  const [emailError, setEmailError]: [boolean, any] = useState(false);
  const [passwordError, setPasswordError]: [boolean, any] = useState(false);

  // Refs for accessibility
  const emailRef: Ref<HTMLInputElement> = useRef(null);
  const passwordRef: Ref<HTMLInputElement> = useRef(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError(email.length === 0);
    setPasswordError(password.length === 0);

    if (email.length === 0 || password.length === 0) {
      return email.length === 0 ? emailRef.current.focus() : passwordRef.current.focus();
    } else {
      return login(history);
    }
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <main>
      <StyledForm onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <StyledLabel htmlFor="email">
          <StyledSpan>Email: *</StyledSpan>
          <StyledTextInput
            aria-invalid={email.length === 0 || (!email.includes('@') && !email.includes('.'))}
            aria-required="true"
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
        <StyledLabel htmlFor="password">
          <StyledSpan>Password: *</StyledSpan>
          <StyledTextInput
            aria-invalid={password.length <= 8}
            aria-required="true"
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

        <input aria-label="Log In" title="Login" type="submit" value="Log In" />
      </StyledForm>
    </main>
  );
};

export default Login;
