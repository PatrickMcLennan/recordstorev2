import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface IUserProps extends RouteComponentProps<{ userId: string; searchedUserId: string }> {}

import usePageMount from 'Hook/usePageMount';

const User: React.FC<IUserProps> = (props: IUserProps) => {
  usePageMount('User X');

  return (
    <main>
      <h2>user</h2>
    </main>
  );
};

export default User;
