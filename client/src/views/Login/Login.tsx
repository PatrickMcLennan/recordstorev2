import React, { useEffect, useRef, useState, FormEvent } from 'react';

import { StyledForm, StyledLabel, StyledSpan, StyledTextInput } from './Login.style';

const Login: React.FC = () => {
  // Fields
  const [email, setEmail]: [string, any] = useState('');
  const [password, setPassword]: [string, any] = useState('');

  // Error Booleans to toggle styles on invalid inputs
  const [emailError, setEmailError]: [boolean, any] = useState(false);
  const [passwordError, setPasswordError]: [boolean, any] = useState(false);

  // Refs for accessibility
  const emailRef: React.Ref<HTMLInputElement> = useRef(null);
  const passwordRef: React.Ref<HTMLInputElement> = useRef(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError(email.length === 0);
    setPasswordError(password.length === 0);

    if (emailError || passwordError) {
      emailError ? emailRef.current.focus() : passwordRef.current.focus();
    }
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <main>
      <StyledForm onSubmit={e => handleSubmit(e)}>
        <StyledLabel htmlFor="email">
          <StyledSpan>Email: *</StyledSpan>
          <StyledTextInput
            aria-invalid={email.length === 0}
            aria-required="true"
            inputError={emailError}
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
            aria-invalid={password.length === 0}
            aria-required="true"
            name="password"
            inputError={passwordError}
            onChange={({ target: { value } }) => setPassword(value)}
            ref={passwordRef}
            title="password"
            type="password"
            value={password}
          />
        </StyledLabel>

        <input type="submit"></input>
      </StyledForm>
    </main>
  );
};

export default Login;
