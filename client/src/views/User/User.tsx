import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface IUserProps extends RouteComponentProps<{ userId: string; searchedUserId: string }> {}

import usePageMount from 'Hook/usePageMount';

const User = (props: IUserProps) => {
  usePageMount('User X');

  return <main>user page babaaay</main>;
};

export default User;
